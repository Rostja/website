import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent {

  cancel() {
    this.router.navigate([{outlets: {popup: null}}]);
  }

  subscribeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.subscribeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    
    }
  
  
  subscribe() {
    if (this.subscribeForm.valid) {
      console.log(this.subscribeForm.value.email);
    } else {
      console.log('Form is invalid');
    }

    setTimeout(() => {
      this.cancel();
    }, 1000);
  }
  





}
