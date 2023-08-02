import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-avvenuto-pagamento',
  templateUrl: './avvenuto-pagamento.component.html',
  styleUrls: ['./avvenuto-pagamento.component.scss']
})
export class AvvenutoPagamentoComponent {
  constructor(private servizio: CommonService) { }

  stampaRicevuta() {
    window.print();
  }
  datiOrdine: any = {};

  ngOnInit() {
    this.datiOrdine = this.servizio.getCarrello();
  }
  dataOggi = formatDate(new Date(), 'dd/MM/yyyy', "en-US");
}