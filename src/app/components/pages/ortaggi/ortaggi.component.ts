import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ortaggi',
  templateUrl: './ortaggi.component.html',
  styleUrls: ['./ortaggi.component.scss']
})
export class OrtaggiComponent {
  constructor(private router: Router) { }


  oncarrelloClick() {
    this.router.navigateByUrl('carrello');
  }
}