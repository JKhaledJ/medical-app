import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const adminRouting : Routes = [
    {path:'', redirectTo:'auth'},
    {path: 'auth', loadChildren:()=>import('./Auth/Auth.module').then(m=>m.AuthModule)},
    {path:'doctordashboard',loadChildren:()=>import('./Doctor/doctordashboard.module').then(m=>m.DoctorDashboardModule)},
]

@NgModule({
    imports:[
        RouterModule.forChild(adminRouting)
        //preloadingStrategy:PreloadAllModules will download all the lazy loaded files at the first visit,
        // so when we go to the lazy loaded page, then we do not download its file at that time.
    ],
    exports:[RouterModule]
})

export class adminRoutingModule{

}
