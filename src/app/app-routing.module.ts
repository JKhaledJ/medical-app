import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const appRouting : Routes = [
    {path: '', loadChildren:()=>import('./Medical/Medical.module').then(m=>m.MedicalModule)},
    {path:'dashboard',loadChildren:()=>import('./Admin/Admin.module').then(m=>m.AdminModule)},
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
