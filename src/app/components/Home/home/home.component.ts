import { Component } from '@angular/core';
import { DbService } from '../../../servises/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dbservice: DbService) { }
  items:any[] = [];
  ngOnInit() {
    this.dbservice.getAllSnippet().then((data)=>{
      this.items = data;
      console.log(data);
    });
  }

}
