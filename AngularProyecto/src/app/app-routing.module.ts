import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
   { path: '',
    component: LoginComponent},
   { path: '',
    component: BarraLateralComponent},
    { path: 'registro',
    component: RegistroComponent},
    { path: 'formulario',
    component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
