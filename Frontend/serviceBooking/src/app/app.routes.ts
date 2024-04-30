import { Routes } from '@angular/router';
import { LandingPageComponent } from '../components/MainPage/landing-page/landing-page.component';
import { LoginPageComponent } from '../components/LoginPage/login-page/login-page.component';
import { SignupPageComponent } from '../components/SignUpPage/signup-page/signup-page.component';

export const routes: Routes = [
    {path:'' , component: LandingPageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'signup',component:SignupPageComponent}
];
