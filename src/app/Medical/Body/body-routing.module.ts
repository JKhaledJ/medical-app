import { MedicalsComponent } from '../Medicals.component';
import { ChatComponent } from './profile/profile-body/chat/chat.component';
import { RatingComponent } from './profile/profile-body/rating/rating.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfileComponent } from './profile/profile.component';
import { BodyComponent } from './body.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AllAboutDoctorComponent } from './Profile/profile-body/all-about-doctor/all-about-doctor.component';


const BodyRoutes:Routes=[
    {path : '', redirectTo: '/home',  pathMatch: 'full'},
    {path:'', component:MedicalsComponent,children:[
      {path:'', component:BodyComponent,children:[
        {path:'home',component:HomeComponent},
        {path:'services',component:OurServicesComponent},
        {path:'about',component:AboutComponent},
        {path:'appointments',component:AppointmentsComponent},
        {path:'Doctor/:id',component:ProfileComponent,children:[
            {path:'', component:AllAboutDoctorComponent},
            {path:'doctor-about', component:AllAboutDoctorComponent},
            {path:'chat',component:ChatComponent},
            {path:'rating',component:RatingComponent}
        ]}
    ]
}
   ]}
]

@NgModule({
    imports:[
        RouterModule.forChild(BodyRoutes)
    ],
    exports:[RouterModule]
})
export class BodyRoutingModules{

}
