import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accesso', component: AccessoComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'reimposta_password', component: ReimpostaPasswordComponent },
  { path: 'frutta', component: FruttaComponent },
  { path: 'chi_siamo', component: ChiSiamoComponent },
  { path: 'termini_condizioni', component: TerminiCondizioniComponent },
  { path: 'guida', component: GuidaComponent },
  { path: 'verdura', component: VerduraComponent },
  { path: 'ortaggi', component: OrtaggiComponent },
  { path: 'ricerca-fruttivendolo', component: RicercaFruttivendoloComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'pagina-pagamento', component: PaginaPagamentoComponent },
  { path: 'avvenuto-pagamento', component: AvvenutoPagamentoComponent },
  { path: 'storico-ordini', component: StoricoOrdiniComponent },
  { path: 'profilo-utente', component: ProfiloUtenteComponent },
  { path: 'nuova-password', component: NuovaPasswordComponent },
  { path: 'ordine/:id', component: OrdineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
