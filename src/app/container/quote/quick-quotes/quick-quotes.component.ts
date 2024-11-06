import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from '../quoteService/quote.service';
import { QuickQuotes } from './quickQuotes.model';
interface FilePreview {
  file: File;
  name: string;
  size: string;
  url: string;
}
@Component({
  selector: 'app-quick-quotes',
  templateUrl: './quick-quotes.component.html',
  styleUrls: ['./quick-quotes.component.css']
})
export class QuickQuotesComponent {
  quickQuoteForm: FormGroup;
  selectedFiles: FilePreview[] = [];

  constructor(private builder: FormBuilder,private quoteService: QuoteService) {
    this.quickQuoteForm = this.builder.group({
      fullName:  this.builder.control('',[Validators.required]),
      purpose: this.builder.control('', [Validators.required]),
      otherPurposeDetail: this.builder.control(''),
      garmentType: this.builder.control('', [Validators.required]),
      otherGarmentTypeDetail: this.builder.control(''),
      // artwork: this.builder.control(null, [Validators.required]),
      email:  this.builder.control('', [Validators.required, Validators.email]),
      quantity:this.builder.control('', [Validators.required]),
      gender: this.builder.group({
        mens: [false],
        ladies: [false],
        kids: [false]
      }),
      colour:this.builder.control('', [Validators.required]),
      otherColourDetail:this.builder.control(''),
      budget: this.builder.control('', [Validators.required]),
      postcode: this.builder.control(''),
      dateRequired: this.builder.control(''),
      additionalInfo:this.builder.control(''),
      // terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    this.quickQuoteForm.get('purpose')?.valueChanges.subscribe(value => {
      this.toggleOtherField(value, 'otherPurposeDetail');
    });

    this.quickQuoteForm.get('garmentType')?.valueChanges.subscribe(value => {
      this.toggleOtherField(value, 'otherGarmentTypeDetail');
    });

    this.quickQuoteForm.get('colour')?.valueChanges.subscribe(value => {
      this.toggleOtherField(value, 'otherColourDetail');
    });
  }

  private toggleOtherField(selectedValue: string, controlName: string): void {
    const control = this.quickQuoteForm.get(controlName);
    if (selectedValue === 'other') {
      control?.setValidators(Validators.required);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity();
  }

  onFileSelected(event: any): void {
    const files = event.target.files as FileList;

    if (files.length > 5) {
      alert('You can only upload up to 5 files.');
      this.selectedFiles = [];
      return;
    }

    this.selectedFiles = Array.from(files).map(file => ({
      file,
      name: file.name,
      size: `${(file.size / 1024).toFixed(2)} KB`,
      url: URL.createObjectURL(file)
    }));

    this.quickQuoteForm.patchValue({ artwork: files });
  }


  onSubmit(): void {
    if (this.quickQuoteForm.valid) {
      // const formData = new FormData();
      const quotes = new QuickQuotes;
      quotes.fullName = this.quickQuoteForm.value.fullName;
      quotes.eventName = this.quickQuoteForm.value.purpose;
      quotes.email = this.quickQuoteForm.value.email;
      quotes.quantity = this.quickQuoteForm.value.quantity.toString();
      quotes.budget = this.quickQuoteForm.value.budget;
      quotes.categoryId = this.quickQuoteForm.value.garmentType;
      quotes.color = this.quickQuoteForm.value.colour;
      quotes.deliveryPostCode = this.quickQuoteForm.value.postcode;
      quotes.dateRequired = this.quickQuoteForm.value.dateRequired;
      quotes.additionalInfo = this.quickQuoteForm.value.additionalInfo;
      // Append text fields to formData
      // formData.append('fullName', this.quickQuoteForm.get('fullName')?.value || '');
      // formData.append('eventName', this.quickQuoteForm.get('purpose')?.value || '');
      // formData.append('email', this.quickQuoteForm.get('email')?.value || '');
      // formData.append('quantity', this.quickQuoteForm.get('quantity')?.value || '');
      // // .toString()
      // formData.append('categoryId', this.quickQuoteForm.get('garmentType')?.value || '');
      // formData.append('color', this.quickQuoteForm.get('colour')?.value || '');
      // // formData.append(quotes.budget, this.quickQuoteForm.get('budget')?.value || '');
      // formData.append('deliveryPostCode', this.quickQuoteForm.get('postcode')?.value || '');
      // // formData.append('dateRequired', this.quickQuoteForm.get('dateRequired')?.value || '');
      // formData.append('additionalInfo', this.quickQuoteForm.get('additionalInfo')?.value || '');

      // // Append otherPurposeDetail, otherGarmentTypeDetail, and otherColourDetail if they are filled
      // if (this.quickQuoteForm.value.otherPurposeDetail) {
      //   formData.append('eventName', this.quickQuoteForm.value.otherPurposeDetail);
      // }
      // if (this.quickQuoteForm.value.otherGarmentTypeDetail) {
      //   formData.append('categoryId', this.quickQuoteForm.value.otherGarmentTypeDetail);
      // }
      // if (this.quickQuoteForm.value.otherColourDetail) {
      //   formData.append('color', this.quickQuoteForm.value.otherColourDetail);
      // }
  
      // Convert gender selection to an array of selected genders
      const selectedGenders = [];
      if (this.quickQuoteForm.value.gender.mens) selectedGenders.push('mens');
      if (this.quickQuoteForm.value.gender.ladies) selectedGenders.push('ladies');
      if (this.quickQuoteForm.value.gender.kids) selectedGenders.push('kids');
      // formData.append('genders', JSON.stringify(selectedGenders));
      quotes.genders = selectedGenders;

      // Append each selected file to formData
      // this.selectedFiles.forEach((filePreview, index) => {
      //   formData.append('imagePath', filePreview.file, filePreview.name);
      // });
  
      // Call the service to submit form data
      this.quoteService.submitQuickQuote(quotes).subscribe({
        next: (response) => {
          console.log('Quote submitted successfully', response);
          // Optional: Reset the form and selected files
          this.quickQuoteForm.reset();
          this.selectedFiles = [];
        },
        error: (error) => {
          console.error('Error submitting quote', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }

}
