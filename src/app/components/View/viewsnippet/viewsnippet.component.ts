import { Component } from '@angular/core';
import { DbService } from '../../../servises/db.service';
import { ActivatedRoute } from '@angular/router';
import { and } from 'firebase/firestore';

@Component({
  selector: 'app-viewsnippet',
  standalone: true,
  imports: [],
  templateUrl: './viewsnippet.component.html',
  styleUrl: './viewsnippet.component.css'
})
export class ViewsnippetComponent {
  codeSnippet:any = {};
  constructor( private route: ActivatedRoute ,private dbService:DbService){
  }
  ngOnInit(){
    const docId = this.route.snapshot.paramMap.get('id');
    this.dbService.getSingleSnippetById(docId!).then(data=>{
      this.codeSnippet = data;
      console.log(this.codeSnippet);
    });
  }
}
