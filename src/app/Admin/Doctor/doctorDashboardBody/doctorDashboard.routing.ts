import { EditmyprofileComponent } from './extrapages/editmyprofile/editmyprofile.component';
import { MyprofileComponent } from './extrapages/myprofile/myprofile.component';
import { ExtrapagesComponent } from './extrapages/extrapages.component';
import { InboxComponent } from './Email/inbox/inbox.component';
import { ComposeComponent } from './Email/compose/compose.component';

import { EmailComponent } from './Email/Email.component';

import { ChatsComponent } from './chat/chats.component';
import { PatientsComponent } from './patients/patients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDashboardBodyComponent } from './doctorDashboardBody.component';
import { DoctorDashboardComponent } from '../doctordashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'',component:DoctorDashboardComponent,children:[
        {path:'', component:DoctorDashboardBodyComponent,children:[
            {path:'home',component:DashboardComponent},
            {path:'patients',component:PatientsComponent},
            {path:'chats',component:ChatsComponent},
            {path:'email', component:EmailComponent,children:[
                {path:'',component:ComposeComponent  },        
                {path:'inbox',component:InboxComponent},
            ]},
            {path:'extra', component:ExtrapagesComponent,children:[
                {path:'',component:MyprofileComponent  },        
                {path:'edit/:id',component:EditmyprofileComponent},        
            ]}
        ]}
    ]},
];

export const DoctorDashboardRoutes = RouterModule.forChild(routes);
