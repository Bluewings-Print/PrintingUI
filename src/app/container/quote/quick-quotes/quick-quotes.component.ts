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
  imagePaths: string[] = [];

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

    if (this.selectedFiles.length + files.length > 5) {
      alert('You can only upload up to 5 files.');
      // this.selectedFiles = [];
      // this.imagePaths = [];
      return;
    }

    Array.from(files).forEach(file => {
      const url = URL.createObjectURL(file);
      const filePreview: FilePreview = {
        file,
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        url: url
      };
      
      // Add new file preview to the arrays
      this.selectedFiles.push(filePreview);
      this.imagePaths.push(url);
    });
  }

  removeFile(index: number): void {
    // Release the object URL to free up memory
    URL.revokeObjectURL(this.selectedFiles[index].url);
    
    // Remove the file from both arrays
    this.selectedFiles.splice(index, 1);
    this.imagePaths.splice(index, 1);
  }


  //   this.selectedFiles = Array.from(files).map(file => {
  //     const url = URL.createObjectURL(file);
  //     this.imagePaths.push(url); // Add each file URL to imagePaths
  //     return {
  //       file,
  //       name: file.name,
  //       size: `${(file.size / 1024).toFixed(2)} KB`,
  //       url: url
  //     };
  //   });
  //   this.imagePaths = this.selectedFiles.map(filePreview => filePreview.url);
  // }


  onSubmit(): void {
    if (this.quickQuoteForm.valid) {
      // const formData = new FormData();
      const quotes = new QuickQuotes();
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
      quotes.imagePath = this.imagePaths;
      
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
