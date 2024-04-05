import { Injectable  } from '@angular/core';
import { Route, Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = new Router;
  private uid?:string
  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user){
        this.uid = user.uid
        console.log("Loged in as user"+ user.email);
      }
      else{
        this.uid = undefined;
        console.log("user logedout ")
      }
    })
   }

   isauthenticated(){
    return this.uid ? true:false;
   }
   getUid(){
    return this.uid;
   }

  registaruser(email: string, password: string) {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert('something went wrong try again')
      });

  }

  loginuser(email: string, password: string) {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.router.navigate(["/"]);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  logout (){
    const auth  = getAuth();
    signOut(auth).then(()=>{

    }).catch((error)=>{
      console.log(alert("Something Went Wrong" + error))
    })
  }
}
