import { DoctorDashboardBodyModule } from './doctorDashboardBody/doctorDashboardBody.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardComponent } from './doctordashboard.component';
import { DoctorDashboardMenuComponent } from './doctorDashboardMenu/doctorDashboardMenu.component';
import { DoctorDashboardHeaderComponent } from './doctorDashboardHeader/doctorDashboardHeader.component';
import { DoctorDashboardBodyComponent } from './doctorDashboardBody/doctorDashboardBody.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
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
      DoctorDashboardBodyModule,
      BsDropdownModule.forRoot(),
      CollapseModule.forRoot(),
    ],
    exports:[
  
    ]
  })
  export class DoctorDashboardModule{
  
  }