import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CodeBinComponent } from './components/code-bin/code-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/Home/home/home.component';
import { ViewsnippetComponent } from './components/View/viewsnippet/viewsnippet.component';
import { DefferdemoComponent } from './components/defferdemo/defferdemo.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "singup", component: SingupComponent },
    { path: "demo", component: DefferdemoComponent },
    { path: "create", component: CodeBinComponent ,canActivate:[authGuard] },
    { path: "about", loadComponent:()=>import('./components/about/about.component').then(com=>com.AboutComponent) },
    { path: "", component:HomeComponent },
    { path: "snippet/:id", component:ViewsnippetComponent },
    { path: "**", component:NotFoundComponent },
];
