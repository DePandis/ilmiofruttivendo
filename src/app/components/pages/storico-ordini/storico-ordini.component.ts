import { Component } from '@angular/core';

@Component({
  selector: 'app-storico-ordini',
  templateUrl: './storico-ordini.component.html',
  styleUrls: ['./storico-ordini.component.scss']
})
export class StoricoOrdiniComponent {
  ordini = [
    {id: '0010', attivo: true},
    {id: '0020', attivo: false},
    {id: '0030', attivo: false}
  ]
}
