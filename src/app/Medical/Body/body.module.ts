import { AboutMeComponent } from './profile/profile-body/about/about.component';
import { PopularityPanelComponent } from './profile/profile-body/popularity-panel/popularity-panel.component';
import { BodyComponent } from './body.component';
import { BodyRoutingModules } from './body-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TestimonialComponent } from './testimonial/testimonial.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CountsComponent } from './counts/counts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
import { ProfileBodyComponent } from './profile/profile-body/profile-body.component';
import { SkillsComponent } from './profile/profile-body/skills/skills.component';
import { RatingComponent } from './profile/profile-body/rating/rating.component';
import { ChatComponent } from './profile/profile-body/chat/chat.component';
@NgModule({
    declarations:[
        AboutComponent,
        AppointmentsComponent,
        ContactUsComponent,
        CountsComponent,
        DepartmentsComponent,
        DoctorsComponent,
        FaqComponent,
        HomeComponent,
        OurServicesComponent,
        TestimonialComponent,
        BodyComponent,
        ProfileComponent,
        ProfileHeaderComponent,
        ProfileBodyComponent,
        SkillsComponent,
        PopularityPanelComponent,
        AboutMeComponent,
        RatingComponent,
        ChatComponent
    ],
    imports:[
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BodyRoutingModules
    ],
    exports:[
        
    ]
})
export class BodyModule{

}