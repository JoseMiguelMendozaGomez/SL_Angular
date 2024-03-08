import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';


const routes: Routes = [
   { path: '',
    component: LoginComponent},
   { path: 'barra',
    component: BarraLateralComponent}
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
