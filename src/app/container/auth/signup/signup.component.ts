import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
        })
      ),
      transition(':enter', [
        animate(
          '0.4s ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
  ],
})
export class SignupComponent {
  signupForm: FormGroup;
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            this.passwordStrengthValidator,
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        termsAccepted: [false, [Validators.requiredTrue]],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordStrengthValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.value;
    if (!password) return null;

    const hasNumber = /\d/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const valid = hasNumber && hasUpper && hasLower && hasSpecialChar;

    return valid ? null : { passwordStrength: true };
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
    } else {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      // Add your signup logic here
    }
  }

  getPasswordStrength(): { text: string; color: string } {
    const password = this.signupForm.get('password')?.value;
    if (!password) return { text: '', color: '' };

    const hasNumber = /\d/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const strength = [hasNumber, hasUpper, hasLower, hasSpecialChar].filter(
      (v) => v
    ).length;

    switch (strength) {
      case 4:
        return { text: 'Strong', color: '#10B981' };
      case 3:
        return { text: 'Moderate', color: '#F59E0B' };
      default:
        return { text: 'Weak', color: '#EF4444' };
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.signupForm.get(controlName);
    if (!control?.errors || !control.touched) return '';

    switch (controlName) {
      case 'fullName':
        if (control.hasError('required')) return 'Full name is required';
        if (control.hasError('minlength'))
          return 'Full name must be at least 2 characters';
        break;
      case 'email':
        if (control.hasError('required')) return 'Email is required';
        if (control.hasError('email')) return 'Please enter a valid email';
        break;
      case 'password':
        if (control.hasError('required')) return 'Password is required';
        if (control.hasError('minlength'))
          return 'Password must be at least 8 characters';
        if (control.hasError('passwordStrength'))
          return 'Password must contain uppercase, lowercase, number and special character';
        break;
      case 'confirmPassword':
        if (control.hasError('required')) return 'Please confirm your password';
        if (this.signupForm.hasError('passwordMismatch'))
          return 'Passwords do not match';
        break;
    }
    return '';
  }
}
