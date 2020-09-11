import { DoctorDashboardRoutes } from './doctorDashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[
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