import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.scss']
})
export class OrdineComponent {

  datiOrdine: any ={};
  totale = 0;
  iva = 0;
  ordineId: any= '';
  constructor(private route: ActivatedRoute,private servizio: CommonService) {

  }

  ngOnInit() {
    this.ordineId = this.route.snapshot.paramMap.get('id');
    this.servizio.getOrdineCalcolato(this.ordineId).subscribe((ordine: any)=>{
      this.datiOrdine = ordine;
        // aggiorniamo il totale
        this.totale = ordine.totale;
        this.iva = ordine.iva;
    });


  }

}
