import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent {

  cancel(): void {}
  
  subscribeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.subscribeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  subscribe() {
    if (this.subscribeForm.valid) {
      console.log(this.subscribeForm.value);
    }
  }





}
