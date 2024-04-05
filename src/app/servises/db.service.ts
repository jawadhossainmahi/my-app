import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?:any;
  constructor(private authService:AuthService) { 
    this.db = getFirestore();
  }

  async createSnipet(snippet:{title?:string,code?:string}){
    try {
      const docRef = await addDoc(collection(this.db,"codebin"),{
        ...snippet,
        by: this.authService.getUid()
      })
      console.log("Document written with Id: ", docRef.id )
    } catch (error) {
      console.error("error adding document: ", 0);
      alert(error);
    }
  }

  async getAllSnippet(){
    let result:any[]= [];
    const querySnapshot = await getDocs(collection(this.db, "codebin"));
    querySnapshot.forEach((doc)=>{
      console.log(`${doc.id}=> ${doc.data()}`);
      result.push({id:doc.id,...doc.data()});
    })
    return result;
  }
  async getSingleSnippetById(docId:string){
   const docRef = doc(this.db,"codebin", docId);
   const docSnap = await getDoc(docRef);
   if (docSnap.exists()) {
    console.log("Document data: ", docSnap.data());
    return docSnap.data();
   }
   else{
    return {
      id:"404",
      title:"not found",
      code: "not found"
    }
   }
  }
}
