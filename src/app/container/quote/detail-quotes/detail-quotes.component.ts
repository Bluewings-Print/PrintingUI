import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { QuoteService } from '../quoteService/quote.service';

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
    private fb: FormBuilder,
    private quotesService: QuoteService
  ) { }

  ngOnInit(): void {
    this.detailQuoteForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      postcode: [''],
      orderForms: this.fb.array([this.createOrderForm()])  // Start with one order form
    });
  }

  createOrderForm(): FormGroup {
    return this.fb.group({
      brand: [''],
      styleName: [''],
      color: [''],
      sizes: this.fb.group({
        s6: [''],
        s8: [''],
        m10: [''],
        l12: [''],
        xl14: [''],
        xxl16: [''],
        xxxl18: [''],
        xxxxl20: [''],
        xxxxxl22: ['']
      }),
      frontArtwork: [null],
      frontArtworkPreview: [null],  // New control for preview
      backArtwork: [null],
      backArtworkPreview: [null],   // New control for preview
      lhSleeve: [null],
      lhSleevePreview: [null],      // New control for preview
      rhSleeve: [null],
      rhSleevePreview: [null],      // New control for preview
      additionalInfo: ['']
    });
  }
  
  onFileChange(event: any, controlName: string, orderIndex: number) {
    const file = event.target.files[0];
    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      // Set the file in the form control
      this.orderForms.at(orderIndex).get(controlName)?.setValue(file);
      if (!fileExtension || allowedExtensions.indexOf(fileExtension)===-1) {
        // this.toastr.error('Invalid file type. Please select an image file (jpg, jpeg, png, or gif).', 'Error');
        return;
      }
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        // this.toastr.error('File size exceeds 10MB. Please select a smaller file.', 'Error');
        return;
      }
    }
    if (file) {
      // Create an image preview URL
      const reader = new FileReader();
      reader.onload = () => {
        const previewControlName = `${controlName}Preview`;
        // Store the preview URL in a custom control to bind it in the template
        this.orderForms.at(orderIndex).get(previewControlName)?.setValue(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
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
    Object.entries(this.detailQuoteForm.value).forEach(([key, value]) => {
      if (key === 'orderForms') {
        (value as any[]).forEach((orderForm, index) => {
          Object.entries(orderForm).forEach(([subKey, subValue]) => {
            if (subKey === 'sizes') {
              Object.entries(subValue as { [key: string]: any }).forEach(([sizeKey, sizeValue]) => {
                formData.append(`orderForms[${index}].sizes.${sizeKey}`, sizeValue as string);
              });
            } else {
              formData.append(`orderForms[${index}].${subKey}`, subValue as Blob | string);
            }
          });
        });
      } else {
        formData.append(key, value as string);
      }
    });

    try {
      const result = await this.quotesService.submitDetailQuote(formData);
      console.log('Form submitted successfully:', result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  }
}
