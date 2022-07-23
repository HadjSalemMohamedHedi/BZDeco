import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { SecteurComponent } from './secteur/secteur.component';
import { DevisComponent } from './devis/devis.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ProjetsComponent,
    ContactComponent,
    SecteurComponent,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
