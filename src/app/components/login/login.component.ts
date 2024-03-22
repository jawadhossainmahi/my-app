import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = new FormControl("",[
    Validators.required,
    Validators.email
  ]);

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])

  loginform = new FormGroup({
    email:this.email,
    password: this.password
  })

  loginsubmit(){
    console.log(this.loginform.value);
  }
  loginreset(){
    this.loginform.reset();
  }
}
