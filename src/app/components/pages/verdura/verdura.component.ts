import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verdura',
  templateUrl: './verdura.component.html',
  styleUrls: ['./verdura.component.scss']
})
export class VerduraComponent {
  constructor(private router: Router) { }


  oncarrelloClick() {
    this.router.navigateByUrl('carrello');
  }
}