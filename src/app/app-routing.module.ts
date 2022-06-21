import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'cliente',component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
