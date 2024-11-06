import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { QuoteService } from '../quoteService/quote.service';
import { DetailedQuote, OrderDetails } from './detailQuotes.model';

@Component({
  selector: 'app-detail-quotes',
  templateUrl: './detail-quotes.component.html',
  styleUrls: ['./detail-quotes.component.css']
})
export class DetailQuotesComponent {
  detailQuoteForm!: FormGroup;

    get orderForms(): FormArray {
    return this.detailQuoteForm.get('orderForms') as FormArray;
  }

  constructor(
    private builder: FormBuilder,
    private quotesService: QuoteService
  ) { }

 
  ngOnInit(): void {
    this.detailQuoteForm = this.builder.group({
      firstName: this.builder.control('', [Validators.required]),
      lastName:  this.builder.control('', [Validators.required]),
      companyName: this.builder.control(''),
      email:  this.builder.control('', [Validators.required, Validators.email]),
      phone:  this.builder.control(''),
      address:  this.builder.control(''),
      city:  this.builder.control(''),
      state:  this.builder.control(''),
      country:  this.builder.control(''),
      zipcode:  this.builder.control(''),
      orderForms: this.builder.array([this.createOrderForm()])
    });
  }

  createOrderForm(): FormGroup {
    return this.builder.group({
      brand:  this.builder.control(''),
      gender:  this.builder.control(''),
      color:  this.builder.control(''),
      sizeQuantity: this.builder.group({
        'S-6':  this.builder.control(''),
        'S-8':  this.builder.control(''),
        'M-10':  this.builder.control(''),
        'L-12':  this.builder.control(''),
        'XL-14':  this.builder.control(''),
        '2XL-16':  this.builder.control(''),
        '3XL-18':  this.builder.control(''),
        '4XL-20':  this.builder.control(''),
        '5XL-22':  this.builder.control('')
      }),
      frontArtwork:  this.builder.control(null),
      backArtwork:  this.builder.control(null),
      lhSleeve:  this.builder.control(null),
      rhSleeve:  this.builder.control(null),
      additionalInfo:  this.builder.control(''),
      // Preview controls
      frontArtworkPreview: [null],
      backArtworkPreview: [null],
      lhSleevePreview: [null],
      rhSleevePreview: [null]
    });
  }
  
  onFileChange(event: any, controlName: string, orderIndex: number) {
    const file = event.target.files[0];
    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      
      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        console.error('Invalid file type');
        return;
      }

      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        console.error('File too large');
        return;
      }

      const orderForm = this.orderForms.at(orderIndex);
      orderForm.get(controlName)?.setValue(file);

      const reader = new FileReader();
      reader.onload = () => {
        const previewControlName = `${controlName}Preview`;
        orderForm.get(previewControlName)?.setValue(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
    // if (file) {
    //   // Create an image preview URL
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     const previewControlName = `${controlName}Preview`;
    //     // Store the preview URL in a custom control to bind it in the template
    //     this.orderForms.at(orderIndex).get(previewControlName)?.setValue(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
  // }
  toggleOrderForm(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.addOrder();
    } else if (this.orderForms.length > 1) {
      this.removeOrder();
    }
  }
  removeOrder(): void {
    if (this.orderForms.length > 1) {
      this.orderForms.removeAt(this.orderForms.length - 1);
    }
  }

  addOrder(): void {
    this.orderForms.push(this.createOrderForm());
  }

  async onSubmit() {
    if (this.detailQuoteForm.invalid) {
      return;
    }

    const formData = new FormData();
    const detailedQuote: DetailedQuote = {
     
      firstName: this.detailQuoteForm.get('firstName')?.value,
      lastName: this.detailQuoteForm.get('lastName')?.value,
      companyName: this.detailQuoteForm.get('companyName')?.value,
      email: this.detailQuoteForm.get('email')?.value,
      phone: this.detailQuoteForm.get('phone')?.value,
      address: this.detailQuoteForm.get('address')?.value,
      city: this.detailQuoteForm.get('city')?.value,
      country: this.detailQuoteForm.get('country')?.value,
      state: this.detailQuoteForm.get('state')?.value,
      zipcode: this.detailQuoteForm.get('zipcode')?.value,
      orderDetails: []
    };

    // Process each order form
    this.orderForms.controls.forEach((orderForm: any, index: number) => {
      const orderDetail: OrderDetails = {
        brand: orderForm.get('brand').value,
        gender: orderForm.get('gender').value,
        color: orderForm.get('color').value,
        sizeQuantity: {},
        frontImagePath: '',
        backImagePath: '',
        lhSleevePath: '',
        rhSleevePath: '',
        additionalInfo: orderForm.get('additionalInfo').value
      };

      // Process size quantities
      const sizeQuantityGroup = orderForm.get('sizeQuantity');
      Object.keys(sizeQuantityGroup.controls).forEach(key => {
        const value = sizeQuantityGroup.get(key)?.value;
        if (value) {
          orderDetail.sizeQuantity[key] = value;
        }
      });

      // Append files to FormData
      const files = {
        frontArtwork: orderForm.get('frontArtwork').value,
        backArtwork: orderForm.get('backArtwork').value,
        lhSleeve: orderForm.get('lhSleeve').value,
        rhSleeve: orderForm.get('rhSleeve').value
        // frontImagePath: orderForm.get('frontArtwork').value,
        // backImagePath: orderForm.get('backArtwork').value,
        // lhSleevePath: orderForm.get('lhSleeve').value,
        // rhSleevePath: orderForm.get('rhSleeve').value
      };

      Object.entries(files).forEach(([key, file]) => {
        if (file) {
          formData.append(`orderDetails[${index}].${key}`, file);
        }
      });

      detailedQuote.orderDetails.push(orderDetail);
    });

    formData.append('detailedQuote', JSON.stringify(detailedQuote));

    try {
      await this.quotesService.submitDetailQuote(formData);
      console.log('Quote submitted successfully');
    } catch (error) {
      console.error('Error submitting quote:', error);
    }
  }
}