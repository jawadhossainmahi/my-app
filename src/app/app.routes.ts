import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "singup", component: SingupComponent },
    { path: "about", loadComponent:()=>import('./components/about/about.component').then(com=>com.AboutComponent) },
    { path: "", redirectTo:"/login",pathMatch:"full" },
    { path: "**", component:NotFoundComponent },
];
