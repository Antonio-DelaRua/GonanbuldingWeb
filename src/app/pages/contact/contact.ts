import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+-\s()]{9,}$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      budget: ['']
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', this.contactForm.value);
      // Reset form
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}