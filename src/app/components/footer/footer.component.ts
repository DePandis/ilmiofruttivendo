import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router) {}

  onchisiamoClick() {
    this.router.navigateByUrl('chi_siamo');
  }
  onterminicondizioniClick() {
    this.router.navigateByUrl('termini_condizioni');
  }
  onguidaClick() {
    this.router.navigateByUrl('guida');
  }
}
