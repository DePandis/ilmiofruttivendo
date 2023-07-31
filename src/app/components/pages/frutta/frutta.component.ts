import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frutta',
  templateUrl: './frutta.component.html',
  styleUrls: ['./frutta.component.scss']
})
export class FruttaComponent {
  constructor(private router: Router) { }


  oncarrelloClick() {
    this.router.navigateByUrl('carrello');
  }
}