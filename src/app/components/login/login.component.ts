import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servises/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService , private router:Router ){

  }
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
    this.authService.loginuser(this.loginform.value.email!, this.loginform.value.password! );
    // console.log(this.loginform.value);
  }
  loginreset(){
    this.loginform.reset();
  }
}
