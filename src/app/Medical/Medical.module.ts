import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyModule } from './Body/body.module';
import { RouterModule } from '@angular/router';
import { MedicalsComponent } from './Medicals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations:[
    MedicalsComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
  ],
  imports:[
    RouterModule,
    CommonModule,
    BodyModule
  ],
  exports:[

  ]
})
export class MedicalModule{

}
