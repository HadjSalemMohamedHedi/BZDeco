import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DevisComponent } from './devis/devis.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { SecteurComponent } from './secteur/secteur.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"projets",component:ProjetsComponent},
  {path:"contact",component:ContactComponent},
  {path:"secteurs",component:SecteurComponent},
  {path:"devis",component:DevisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
