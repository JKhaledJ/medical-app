import { AuthComponent } from './Auth.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './Auth-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,
        AuthComponent
     ],
     imports:[
       RouterModule,
       CommonModule,
       AuthRoutes
     ],
     exports:[
   
     ]
})
export class AuthModule{

}