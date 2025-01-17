import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from '../quoteService/quote.service';
import { QuickQuotes } from './quickQuotes.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
interface FilePreview {
  file: File;
  name: string;
  size: string;
  url: string;
  base64: string;
}
@Component({
  selector: 'app-quick-quotes',
  templateUrl: './quick-quotes.component.html',
  styleUrls: ['./quick-quotes.component.css']
})
export class QuickQuotesComponent {
  quickQuoteForm: FormGroup;
  selectedFiles: FilePreview[] = [];
  // imagePaths: string[] = [];

  constructor(private builder: FormBuilder,private quoteService: QuoteService, private toastr: ToastrService,private route: ActivatedRoute) {
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
      colour:this.builder.control(''),
      otherColourDetail:this.builder.control(''),
      budget: this.builder.control(''),
      postcode: this.builder.control('', [Validators.required]),
      dateRequired: this.builder.control('', [Validators.required]),
      additionalInfo:this.builder.control(''),
      // terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const garmentType = params['garmentType'];
      if (garmentType) {
        this.quickQuoteForm.patchValue({ garmentType });
      }
    });
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

  async onFileSelected(event: any): Promise<void> {
    const files = event.target.files as FileList;

    if (this.selectedFiles.length + files.length > 5) {
      this.toastr.error('You can only upload up to 5 files.', 'File Upload Error');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      const allowedExtensions = ['png', 'jpeg', 'jpg', 'gif'];
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 M

       // Validate file extension
    if (!allowedExtensions.includes(fileExtension || '')) {
      this.toastr.error(
        `Invalid file type: ${file.name}. Allowed types are: png, jpeg, jpg, gif.`,
        'File Upload Error'
      );
      continue;
    }

       // Validate file size
       if (file.size > maxSizeInBytes) {
        this.toastr.error(
          `File size too large: ${file.name}. Maximum allowed size is 2 MB.`,
          'File Upload Error'
        );
        continue;
      }


      const base64 = await this.convertFileToBase64(file);
      const filePreview: FilePreview = {
        file,
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        url: URL.createObjectURL(file),
        base64 // Store the base64 string here
      };
      this.selectedFiles.push(filePreview);
    }

    // if (this.selectedFiles.length > 0) {
    //   this.toastr.success('Files added successfully.', 'File Upload Success');
    // }
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  removeFile(index: number): void {
    URL.revokeObjectURL(this.selectedFiles[index].url);
    this.selectedFiles.splice(index, 1);
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
      // quotes.imagePath = this.imagePaths;

      const selectedGenders = [];
      if (this.quickQuoteForm.value.gender.mens) selectedGenders.push('mens');
      if (this.quickQuoteForm.value.gender.ladies) selectedGenders.push('ladies');
      if (this.quickQuoteForm.value.gender.kids) selectedGenders.push('kids');
      // formData.append('genders', JSON.stringify(selectedGenders));
      quotes.genders = selectedGenders;


      quotes.imagePath = this.selectedFiles.map(file => file.base64);

      // this.selectedFiles.forEach((filePreview, index) => {
      //   formData.append('imagePath', filePreview.file, filePreview.name);
      // });


      // Check if purpose is "other" and use alternative field if necessary
      quotes.eventName = this.quickQuoteForm.value.purpose === 'other'
        ? this.quickQuoteForm.value.otherPurposeDetail
        : this.quickQuoteForm.value.purpose;

           // Check if garmentType is "other" and use alternative field if necessary
      quotes.categoryId = this.quickQuoteForm.value.garmentType === 'other'
      ? this.quickQuoteForm.value.otherGarmentTypeDetail
      : this.quickQuoteForm.value.garmentType;

    // Check if colour is "other" and use alternative field if necessary
    quotes.color = this.quickQuoteForm.value.colour === 'other'
      ? this.quickQuoteForm.value.otherColourDetail
      : this.quickQuoteForm.value.colour;


      // Call the service to submit form data
      this.quoteService.submitQuickQuote(quotes).subscribe({
        next: (response) => {
          console.log('Quote submitted successfully', response);
          this.toastr.success('Product added successfully', 'Success');
          // Optional: Reset the form and selected files
          this.quickQuoteForm.reset();
          this.selectedFiles = [];
        },
        error: (error) => {
          this.toastr.error('Error submitting quote');
          console.error('Error submitting quote', error);
      }
  });
} else {
  this.showValidationErrors();
}
}

private showValidationErrors(): void {
  const controls = this.quickQuoteForm.controls;
  let errorMessage = 'Please fill in the following required fields:\n';

  if (controls['fullName'].invalid) {
      errorMessage += '- Full Name\n';
  }
  if (controls['purpose'].invalid) {
      errorMessage += '- Purpose\n';
  }
  if (controls['garmentType'].invalid) {
      errorMessage += '- Garment Type\n';
  }
  if (controls['email'].invalid) {
      errorMessage += '- Email\n';
  }
  if (controls['quantity'].invalid) {
      errorMessage += '- Quantity\n';
  }
  if (controls['postcode'].invalid) {
      errorMessage += '- Delivery Postcode\n';
  }
  if (controls['dateRequired'].invalid) {
      errorMessage += '- Date Required\n';
  }

  this.toastr.error(errorMessage, 'Validation Errors');
}

}
