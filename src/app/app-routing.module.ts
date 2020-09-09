import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
const appRouting : Routes = [
    {path: '', loadChildren:()=>import('./Medical/Medical.module').then(m=>m.MedicalModule)},
    {path:'dashboard',component:DashboardComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRouting,{preloadingStrategy:PreloadAllModules})
        //preloadingStrategy:PreloadAllModules will download all the lazy loaded files at the first visit,
        // so when we go to the lazy loaded page, then we do not download its file at that time.
    ],
    exports:[RouterModule]
})

export class appRoutingModule{

}
