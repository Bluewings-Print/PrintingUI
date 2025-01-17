import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { QuoteService } from '../quoteService/quote.service';
import { DetailedQuote, OrderDetails } from './detailQuotes.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



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
    private quotesService: QuoteService,
    private router: Router,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.detailQuoteForm = this.builder.group({
      firstName: this.builder.control('', [Validators.required]),
      lastName:  this.builder.control(''),
      companyName: this.builder.control(''),
      email:  this.builder.control('', [Validators.required, Validators.email]),
      phone:  this.builder.control('',[Validators.required]),
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
      frontImagePath:this.builder.control(''),
      backImagePath:this.builder.control(''),
      lhSleevePath:this.builder.control(''),
      rhSleevePath:this.builder.control(''),
      additionalInfo:  this.builder.control(''),
      // Preview controls
      frontArtworkPreview: [null],
      backArtworkPreview: [null],
      lhSleevePreview: [null],
      rhSleevePreview: [null]
    });
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  async onFileChange(event: any, controlName: string, orderIndex: number) {
    const file = event.target.files[0];
    const maxSizeInBytes = 2 * 1024 * 1024; // 1 M
    if (file.size > maxSizeInBytes) {
      this.toastr.error(
        `File size too large: ${file.name}. Maximum allowed size is 2 MB.`,
        'File Upload Error'
      );
      return;
    }
    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        console.error('Invalid file type');
        this.toastr.error('Invalid file type');
        return;
      }


      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        console.error('File too large');
        this.toastr.error('File too large');
        return;
      }


      const orderForm = this.orderForms.at(orderIndex);

      try {
        // Convert file to base64 and store it in the corresponding path control
        const base64String = await this.convertFileToBase64(file);

        // Map the control names to their corresponding path names
        const pathMapping: { [key: string]: string } = {
          'frontArtwork': 'frontImagePath',
          'backArtwork': 'backImagePath',
          'lhSleeve': 'lhSleevePath',
          'rhSleeve': 'rhSleevePath'
        };

        const pathControlName = pathMapping[controlName];

        if (pathControlName) {
          // Update the form controls
          orderForm.patchValue({
            [controlName]: file,
            [`${controlName}Preview`]: base64String,
            [pathControlName]: base64String
          });

          // Log to verify the values are set correctly
          console.log(`Updated ${pathControlName}:`, orderForm.get(pathControlName)?.value);
          // this.toastr.error('Invalid file type');

        }
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  }

  // onFileChange(event: Event, fieldName: string, index: number): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const previewControl = this.orderForms.at(index).get(`${fieldName}Preview`);
  //       if (previewControl) {
  //         previewControl.setValue(reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(input.files[0]);
  //   }
  // }
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
  toggleOrderForm(event: Event, index: number): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Only add a new order form if the current one is valid
      if (this.orderForms.at(index).valid) {
        this.orderForms.push(this.createOrderForm());
      } else {
        this.toastr.error('Please fill in the current order details before adding a new one.');
        checkbox.checked = false; // Uncheck the checkbox if the current form is invalid
      }
    } else {
      // Remove the last order form only if there are more than one
      if (this.orderForms.length > 1) {
        this.orderForms.removeAt(this.orderForms.length - 1);
      }
    }
  }

  removeOrder(): void {
    if (this.orderForms.length > 1) {
      this.orderForms.removeAt(this.orderForms.length - 1);
    }
  }

  // addOrder(): void {
  //   this.orderForms.push(this.createOrderForm());
  // }
  // (click)="addOrder()"
  async onSubmit() {
    if (this.detailQuoteForm.invalid) {
      this.showValidationErrors();
      console.error('Form is invalid');
      // this.toastr.error('Form is Invalid');
      return;
    }

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
      orderDetails: [],
      id: ''
    };

    // Process each order form
    this.orderForms.controls.forEach((orderForm: any) => {
      if(orderForm.valid){
        const orderDetail: OrderDetails = {
          brand: orderForm.get('brand')?.value,
          gender: orderForm.get('gender')?.value,
          color: orderForm.get('color')?.value,
          sizeQuantity: {},
          frontImagePath: orderForm.get('frontImagePath')?.value || '',
          backImagePath: orderForm.get('backImagePath')?.value || '',
          lhSleevePath: orderForm.get('lhSleevePath')?.value || '',
          rhSleevePath: orderForm.get('rhSleevePath')?.value || '',
          additionalInfo: orderForm.get('additionalInfo')?.value
        };


         // Process size quantities
      const sizeQuantityGroup = orderForm.get('sizeQuantity');
      Object.keys(sizeQuantityGroup.controls).forEach(key => {
        const value = sizeQuantityGroup.get(key)?.value;
        if (value) {
          orderDetail.sizeQuantity[key] = value;
        }
      });
      console.log('Image Paths:', {
        front: orderDetail.frontImagePath,
        back: orderDetail.backImagePath,
        lh: orderDetail.lhSleevePath,
        rh: orderDetail.rhSleevePath
      });

      if (orderDetail.brand || orderDetail.gender || orderDetail.color || Object.keys(orderDetail.sizeQuantity).length > 0) {
        detailedQuote.orderDetails.push(orderDetail);
    }

      }

    });

    try {
      await this.quotesService.submitDetailQuote(detailedQuote).subscribe(
        (response) => {
          console.log('Quote submitted successfully', response);
          this.toastr.success('Quote submitted successfully', 'Success');
          this.detailQuoteForm.reset();
          // this.router.navigate(['/quote/quickQuote']).then(() => {
          //   this.router.navigate(['/quote/detailQuote']);
          // });
          // this.selectedFiles = [];
        },
        (error) => {
          console.error('Error submitting quote:', error);
          this.toastr.error('Error submitting quote');
        }
      );
    } catch (error) {
      console.error('Error submitting quote:', error);
      this.toastr.error('Error submitting quote');
    }
  }
  private showValidationErrors(): void {
    const controls = this.detailQuoteForm.controls;
    let errorMessage = 'Please fill in the following required fields:\n';

    if (controls['firstName'].invalid) {
        errorMessage += '- First Name\n';
    }
    if (controls['email'].invalid) {
        errorMessage += '- Email\n';
    }
    if (controls['phone'].invalid) {
        errorMessage += '- Phone\n';
    }

    // Check each order form for required fields
    this.orderForms.controls.forEach((orderForm: any, index: number) => {
        if (orderForm.get('brand').invalid) {
            errorMessage += `- Brand in Order ${index + 1}\n`;
        }
        if (orderForm.get('gender').invalid) {
            errorMessage += `- Gender in Order ${index + 1}\n`;
        }
        if (orderForm.get('color').invalid) {
            errorMessage += `- Color in Order ${index + 1}\n`;
        }
    });

    this.toastr.error(errorMessage, 'Validation Errors');
}
}
