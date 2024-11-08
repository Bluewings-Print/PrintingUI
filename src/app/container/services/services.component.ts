import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact/contactService/contact-service.service';
import { ContactModel } from '../contact/contactModel/contact.model';
// import { ContactServiceService } from '../services/contact-service.service';
// import { Contact } from '../contactModel/contact.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;
  successMessage = 'Form Submitted successfully';
  errorMessage = 'Error! Form did not submitted';

  services = [
    { name: 'Custom Embroidery', image: 'assets/public/heat-4.jpg' },
    { name: 'Custom Printing', image: 'assets/public/vinyl-transfer.jpg' },
    { name: 'Company Branding', image: 'assets/public/embroidery (1).jpg' },
  ];

  products = [
    { name: 'Hoodies', image: 'assets/public/blackHoodie.png' },
    { name: 'Polos', image: 'assets/public/blackPolo.png' },
    { name: 'T-Shirts', image: 'assets/public/blackTshirt.png' },
    { name: 'Caps', image: 'assets/public/blackCap.png' },
  ];

  features = [
    { icon: '📷', text: 'Image Quality' },
    { icon: '🎨', text: 'High-Quality Prints' },
    { icon: '✂️', text: 'Custom Printing' },
    { icon: '🏷️', text: 'Company Branding' },
  ];

  contactFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: false },
    { name: 'subject', label: 'Subject', type: 'text', required: false },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ];
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
    this.errorMessage = 'Error sending contact information!';
    this.successMessage = 'Contact information send successfully';
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