import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogged: boolean = false;

  path: any;

  constructor(private router: Router, private commonService: CommonService, private activedRoute: ActivatedRoute) {
    this.commonService.isLogged.subscribe(res => {
      console.log("NAV BAR stato login aggiornato",res);
      this.isLogged = res;
    })
  }

  ngOnInit() {
    this.activedRoute.url.subscribe(([url]) => {
      this.path = url;
      console.log(this.path);
    });
  }

  onaccessoClick() {
    this.router.navigateByUrl('accesso');
  }

  onregistratiClick() {
    this.router.navigateByUrl('registrazione');
  }
  onfruttaClick() {
    this.router.navigateByUrl('frutta');
  }
  onverduraClick() {
    this.router.navigateByUrl('verdura');
  }
  onortaggiClick() {
    this.router.navigateByUrl('ortaggi');
  }
  onKeydown(event: any) {
    if (event.key === "Enter") {
      this.router.navigateByUrl('ricerca-fruttivendolo');
    }
  }
  oncarrelloClick() {
    this.router.navigateByUrl('carrello');
  }
  onstoricoordiniClick() {
    this.router.navigateByUrl('storico-ordini');
  }
  onprofiloutenteClick() {
    this.router.navigateByUrl('profilo-utente');
  }
  ondisconnessioneClick() {
    // Visualizza un avviso per confermare la disconnessione
  
 
const confirmLogout = confirm("Sei sicuro di volerti disconnettere?");
  
if (confirmLogout) {
  // Utente conferma, procedi con il logout
  
    const dropdown: any = document.getElementById('dropdown-profilo-utente');
    dropdown.classList.remove("show");
    this.commonService.logout();
    this.router.navigateByUrl('dashboard');
}
  }
}