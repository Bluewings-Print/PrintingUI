import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contactModel/contact.model';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { ContactService } from './contactService/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  // Custom validation messages
  validationMessages = {
    name: {
      required: 'Name is required',
      minlength: 'Name must be at least 2 characters long',
      pattern: 'Name must contain only letters'
    },
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email address'
    },
    phone: {
      pattern: 'Please enter a valid phone number',
      minlength: 'Phone number must be at least 10 digits',
      maxlength: 'Phone number cannot exceed 15 digits'
    },
    subject: {
      required: 'Subject is required',
      minlength: 'Subject must be at least 5 characters long'
    },
    message: {
      required: 'Message is required',
      minlength: 'Message must be at least 10 characters long'
    }
  };
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
  ) {}


  ngOnInit(): void {
    // this.contactForm = this.formBuilder.group({
    //   name: this.formBuilder.control('', [Validators.required]),
    //   email:this.formBuilder.control('', [Validators.required, Validators.email]) ,
    //   phone:this.formBuilder.control('',[Validators.pattern('^[0-9]*$')]),
    //   subject:this.formBuilder.control('', [Validators.required]),
    //   message:this.formBuilder.control('', [Validators.required])
    // });
    this.initializeForm();
  }

  // ngOnInit(): void {
  //   
  // }

  private initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      name:this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      email:this.formBuilder.control('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
      ]),
      phone:this.formBuilder.control('', [
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(9),
        Validators.maxLength(15)
      ]),
      subject:this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      message:this.formBuilder.control('', [
        Validators.required,
        // Validators.minLength(10)
      ])
    });
  }

  // Helper methods to check field validity
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control && control.errors) {
      const errors = Object.keys(control.errors);
      if (errors.length > 0) {
        const firstError = errors[0];
        // Type assertion to fix the error
        return (this.validationMessages as { [key: string]: { [key: string]: string } })[fieldName][firstError];
      }
    }
    return '';
  }

  // Form submission
  onSubmit(): void {
    this.isSubmitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Check if form is valid
    if (this.contactForm.valid) {
      this.isLoading = true;
      const contact_ID = this.contactService.generateRandomContactID();
      
      // Create contact model
      const formData = new ContactModel();
      formData.id = contact_ID;
      formData.firstName = this.contactForm.value.name.trim();
      formData.phoneNumber = this.contactForm.value.phone?.trim();
      formData.email = this.contactForm.value.email.trim().toLowerCase();
      formData.description = this.contactForm.value.subject.trim();
      formData.message = this.contactForm.value.message.trim();

      // Submit only if required fields are present after trimming
      if (this.validateFormData(formData)) {
        this.submitForm(formData);
      } else {
        this.errorMessage = 'Please fill in all required fields correctly.';
        this.isLoading = false;
      }
    } else {
      this.errorMessage = 'Please correct the errors in the form.';
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private validateFormData(formData: ContactModel): boolean {
    return !!(
      formData.firstName &&
      formData.email &&
      formData.description &&
      formData.message &&
      formData.firstName.length >= 2 &&
      formData.message.length >= 10
    );
  }

  private submitForm(formData: ContactModel): void {
    this.contactService.submitContactDetail(formData).subscribe({
      next: (response) => {
        this.successMessage = 'Your message has been sent successfully!';
        this.contactForm.reset();
        this.isSubmitted = false;
        console.log('Form submission successful:', response);
      },
      error: (error) => {
        this.errorMessage = 'Failed to send your message. Please try again later.';
        console.error('Error in form submission:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  // Utility method to mark all fields as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Reset form
  resetForm(): void {
    this.contactForm.reset();
    this.isSubmitted = false;
    this.errorMessage = '';
    this.successMessage = '';
  }
}