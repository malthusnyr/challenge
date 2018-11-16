import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component'
import { RegisterclientComponent } from './registerclient/registerclient.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "registerclient",
    component: RegisterclientComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
