import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../servises/db.service';
import { snippet } from '../../../models/snippet';

@Component({
  selector: 'app-code-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './code-bin.component.html',
  styleUrl: './code-bin.component.css'
})
export class CodeBinComponent {
  constructor(private dbService: DbService) {

  }
  title = new FormControl("", [
    Validators.required
  ]);

  code = new FormControl("", [
    Validators.required,
    Validators.minLength(6)
  ])

  codeform = new FormGroup({
    title: this.title,
    code: this.code
  })

 async codesubmit() {
    console.log(this.codeform.value);
   await this.dbService.createSnipet(this.codeform.value as snippet)
  }
  codereset() {
    this.codeform.reset();
  }
}
