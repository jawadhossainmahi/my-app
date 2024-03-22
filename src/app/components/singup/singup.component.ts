import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  constructor(private router:Router){

  }
  signupsubmit(regForm: NgForm) {
    console.log(regForm.value);
    this.router.navigate(["/login"]);
  }

  singupreset(regForm: NgForm) {
    regForm.reset();
  }
}
