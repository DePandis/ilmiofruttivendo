import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AccessoComponent } from './components/pages/accesso/accesso.component';
import { RegistrazioneComponent } from './components/pages/registrazione/registrazione.component';
import { ReimpostaPasswordComponent } from './components/pages/reimposta-password/reimposta-password.component';
import { FruttaComponent } from './components/pages/frutta/frutta.component';
import { ChiSiamoComponent } from './components/pages/chi-siamo/chi-siamo.component';
import { TerminiCondizioniComponent } from './components/pages/termini-condizioni/termini-condizioni.component';
import { GuidaComponent } from './components/pages/guida/guida.component';
import { VerduraComponent } from './components/pages/verdura/verdura.component';
import { OrtaggiComponent } from './components/pages/ortaggi/ortaggi.component';
import { RicercaFruttivendoloComponent } from './components/pages/ricerca-fruttivendolo/ricerca-fruttivendolo.component';
import { CarrelloComponent } from './components/pages/carrello/carrello.component';
import { PaginaPagamentoComponent } from './components/pages/pagina-pagamento/pagina-pagamento.component';
import { AvvenutoPagamentoComponent } from './components/pages/avvenuto-pagamento/avvenuto-pagamento.component';
import { StoricoOrdiniComponent } from './components/pages/storico-ordini/storico-ordini.component';
import { ProfiloUtenteComponent } from './components/pages/profilo-utente/profilo-utente.component';
import { NuovaPasswordComponent } from './components/pages/nuova-password/nuova-password.component';
import { OrdineComponent } from './components/pages/ordine/ordine.component';
import { FormsModule } from '@angular/forms';
import { AggiungiAlCarrelloComponent } from './components/pages/carrello/aggiungi-al-carrello/aggiungi-al-carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PagesComponent,
    DashboardComponent,
    AccessoComponent,
    RegistrazioneComponent,
    ReimpostaPasswordComponent,
    FruttaComponent,
    ChiSiamoComponent,
    TerminiCondizioniComponent,
    GuidaComponent,
    VerduraComponent,
    OrtaggiComponent,
    RicercaFruttivendoloComponent,
    CarrelloComponent,
    PaginaPagamentoComponent,
    AvvenutoPagamentoComponent,
    StoricoOrdiniComponent,
    ProfiloUtenteComponent,
    NuovaPasswordComponent,
    OrdineComponent,
    AggiungiAlCarrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks();
  }
 
 }