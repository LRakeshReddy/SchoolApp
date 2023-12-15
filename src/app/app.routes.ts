import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path:'register', component: UserRegistrationComponent}
];
