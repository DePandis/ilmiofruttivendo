import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servizio: CommonService
  ) {

  }
  ordineId: any= '';
  datiOrdine: any ={};

  ngOnInit() {
    this.datiOrdine = this.servizio.getCarrello();
    /*
    this.ordineId = '0030';
    this.servizio.getOrdineCalcolato(this.ordineId).subscribe((ordine: any)=>{
      this.datiOrdine = ordine;
    });
    */
  }

  onpagamentoClick() {
    this.router.navigateByUrl('pagina-pagamento');
  }
}