import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servises/auth.service';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  constructor(private authService:AuthService , private router:Router){

  }

  signupsubmit(regForm: NgForm) {
    // console.log(regForm.value);
    // this.router.navigate(["/login"]);
    this.authService.registaruser(regForm.value.email, regForm.value.password)
  }

  singupreset(regForm: NgForm) {
    regForm.reset();
  }
}
