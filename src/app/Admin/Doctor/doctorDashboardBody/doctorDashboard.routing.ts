import { DoctorDashboardComponent } from '../doctordashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'',component:DoctorDashboardComponent}
];

export const DoctorDashboardRoutes = RouterModule.forChild(routes);
