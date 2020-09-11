import { DoctorDashboardBodyModule } from './doctorDashboardBody/doctorDashboardBody.module';
import { DoctorDashboardComponent } from './doctordashboard.component';
import { DoctorDashboardMenuComponent } from './doctorDashboardMenu/doctorDashboardMenu.component';
import { DoctorDashboardHeaderComponent } from './doctorDashboardHeader/doctorDashboardHeader.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardBodyComponent } from './doctorDashboardBody/doctorDashboardBody.component';
@NgModule({
    declarations:[
        DoctorDashboardHeaderComponent,
        DoctorDashboardBodyComponent,
        DoctorDashboardMenuComponent,
        DoctorDashboardComponent
    ],
    imports:[
      RouterModule,
      CommonModule,
      DoctorDashboardBodyModule
    ],
    exports:[
  
    ]
  })
  export class DoctorDashboardModule{
  
  }