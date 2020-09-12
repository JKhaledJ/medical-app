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
            {path:'chats',component:ChatsComponent}
        ]}
    ]},
];

export const DoctorDashboardRoutes = RouterModule.forChild(routes);
