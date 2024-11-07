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
  successMessage = 'Form Submitted successfully';
  errorMessage = 'Error! Form did not submitted';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}


  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email:this.formBuilder.control('', [Validators.required, Validators.email]) ,
      phone:this.formBuilder.control('',[Validators.pattern('^[0-9]*$')]),
      subject:this.formBuilder.control('', [Validators.required]),
      message:this.formBuilder.control('', [Validators.required])
    });
  }

  // Submit the contact form
  onSubmit(): void {
    this.isSubmitted = true;
    this.errorMessage = '';
    this.successMessage = '';
   let contact_ID = this.contactService.generateRandomContactID();
    if (this.contactForm.invalid) {
      const formData = new ContactModel;
      formData.id = contact_ID;
      formData.firstName = this.contactForm.value.name;
      formData.phoneNumber = this.contactForm.value.phone;
      formData.email = this.contactForm.value.email;
      formData.description = this.contactForm.value.subject;
      formData.message = this.contactForm.value.message;

    this.isLoading = true;
    // const formData: Contact = this.contactForm.value;

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
  }
}