import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfileComponent } from './profile/profile.component';
import { BodyComponent } from './body.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';


const BodyRoutes:Routes=[
    {path : '', redirectTo: '/home',  pathMatch: 'full'},
    {path:'', component:BodyComponent,children:[
            {path:'home',component:HomeComponent},
            {path:'services',component:OurServicesComponent},
            {path:'about',component:AboutComponent},
            {path:'appointments',component:AppointmentsComponent},
            {path:'Doctor',component:ProfileComponent}
        ]
    }, 
    
]

@NgModule({
    imports:[
        RouterModule.forChild(BodyRoutes)
    ],
    exports:[RouterModule]
})
export class BodyRoutingModules{

}