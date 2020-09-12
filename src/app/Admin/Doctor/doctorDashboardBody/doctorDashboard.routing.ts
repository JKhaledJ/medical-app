import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDashboardBodyComponent } from './doctorDashboardBody.component';
import { DoctorDashboardComponent } from '../doctordashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'',component:DoctorDashboardComponent,children:[
        {path:'', component:DoctorDashboardBodyComponent,children:[
            {path:'home',component:DashboardComponent}
        ]}
    ]},
];

export const DoctorDashboardRoutes = RouterModule.forChild(routes);
