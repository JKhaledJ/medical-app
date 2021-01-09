import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
const authRouting : Routes = [
    {path:'', redirectTo:'login'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
]
export const AuthRoutes = RouterModule.forChild(authRouting);
