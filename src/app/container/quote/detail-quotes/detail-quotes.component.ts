import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { QuoteService } from '../quoteService/quote.service';

@Component({
  selector: 'app-detail-quotes',
  templateUrl: './detail-quotes.component.html',
  styleUrls: ['./detail-quotes.component.css']
})
export class DetailQuotesComponent {
  detailQuoteForm: FormGroup;
  orderForms!: FormArray;
  orderFormCount = 1;

  constructor(
    private fb: FormBuilder,
    private quotesService: QuoteService
  ) {
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
      orderForms: this.fb.array([this.createOrderForm()]) 
    });
  }

  get orderFormsArray() {
    return this.detailQuoteForm.get('orderForms') as FormArray;
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
      backArtwork: [null],
      lhSleeve: [null],
      rhSleeve: [null],
      additionalInfo: ['']
    });
  }

  addOrderForm() {
    this.orderFormsArray.push(this.createOrderForm());
    this.orderFormCount++;
  }

  removeOrderForm(index: number) {
    if (this.orderFormCount > 1) {
      this.orderFormsArray.removeAt(index);
      this.orderFormCount--;
    }
  }

  onFileChange(event: any, controlName: string, orderIndex: number) {
    const file = event.target.files[0];
    if (file) {
      this.orderFormsArray.at(orderIndex).get(controlName)?.setValue(file);
    }
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
