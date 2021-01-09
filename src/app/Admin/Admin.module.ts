import { adminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
    declarations:[
    ],
    imports:[
      RouterModule,
      CommonModule,
      ReactiveFormsModule,
      adminRoutingModule
    ],
    exports:[
  
    ]
  })
  export class AdminModule{
  
  }