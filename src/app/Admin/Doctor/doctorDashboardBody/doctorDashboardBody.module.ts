import { BrowserModule } from '@angular/platform-browser';
import { InboxComponent } from './Email/inbox/inbox.component';
import { ComposeComponent } from './Email/compose/compose.component';
import { ChatsComponent } from './chat/chats.component';
import { PatientsComponent } from './patients/patients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDashboardRoutes } from './doctorDashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './Email/Email.component';
import { ExtrapagesComponent } from './extrapages/extrapages.component';
import { MyprofileComponent } from './extrapages/myprofile/myprofile.component';
import { EditmyprofileComponent } from './extrapages/editmyprofile/editmyprofile.component';

@NgModule({
    declarations:[
        DashboardComponent,
        PatientsComponent,
        ChatsComponent,
        EmailComponent,
        ComposeComponent,
        InboxComponent,
        ExtrapagesComponent,
        MyprofileComponent,
        EditmyprofileComponent,
],
imports:[
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DoctorDashboardRoutes
   ],
exports:[
    
]
})
export class DoctorDashboardBodyModule{

}