import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaBadanComponent } from './lista-badan/lista-badan.component';

/*
  TO JEST MODUŁ ROUTERA
  TUTAJ ZNAJDUJĄ SIĘ WSZYSTKIE ŚCIEŻKI W APLIKACJI :)
  A PRZYNAJMNIEJ STANDARDOWE ENDPOINTY
*/
const routes: Routes = [
  { path: 'klab', component: ListaBadanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriumManagerRoutingModule { }
