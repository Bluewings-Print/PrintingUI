import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from '../quoteService/quote.service';
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
      artwork: this.builder.control(null, [Validators.required]),
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
      terms: [false, Validators.requiredTrue]
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
      return;
    }

    this.selectedFiles = Array.from(files).map(file => {
      const filePreview: FilePreview = {
        file: file as File,
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        url: URL.createObjectURL(file as Blob)
      };
      return filePreview;
    });

    this.quickQuoteForm.patchValue({ artwork: files });
  }

  onSubmit(): void {
    if (this.quickQuoteForm.valid) {
      const formData = new FormData();

      // Append form values
      Object.entries(this.quickQuoteForm.value).forEach(([key, value]) => {
        if (key === 'artwork') {
          // Append files separately
          this.selectedFiles.forEach((filePreview, index) => {
            formData.append('artwork', filePreview.file, filePreview.name);
          });
        } else if (typeof value === 'object' && value !== null) {
          // Handle nested form groups (e.g., gender group)
          Object.entries(value).forEach(([subKey, subValue]) => {
            formData.append(`${key}.${subKey}`, subValue as string);
          });
        } else {
          formData.append(key, value as string);
        }
      });

      // Call the service to upload
      this.quoteService.submitQuickQuote(formData).subscribe({
        next: (response:any) => {
          console.log('Quote submitted successfully', response);
        },
        error: (error:any) => {
          console.error('Error submitting quote', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
