import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-aggiungi-al-carrello',
  templateUrl: './aggiungi-al-carrello.component.html',
  styleUrls: ['./aggiungi-al-carrello.component.scss']
})
export class AggiungiAlCarrelloComponent {
  @Input() form?: any;
  @Input() tipo = 'vegetables';
  
  constructor(private router: Router, private servizio: CommonService) { }

  aggiungiAlCarrello() {
    
    console.log(this.form);
    const ordine:Product[] = [];
    if(this.form) {
      const checkbox = this.form.querySelectorAll('input[type="checkbox"]');
      const inputs = this.form.querySelectorAll('input[type="number"]');
      const prodottiEsistenti: Product[] = []; // Array per mantenere i prodotti esistenti nel carrello
      
      for (let i = 0; i < checkbox.length; i++) {
        console.log("ELABORO INPUT " + i);
        const selezionato = checkbox.item(i).value;
        const checked = checkbox.item(i).checked;
        const valore = inputs.item(i).value;
        console.log("AGGIUNTO " + selezionato + "=" + checked + " valore " + valore );

        // controllo se è selezionato 
        if (checked) { // nel caso lo aggiungo al carrello
          const prodotto: Product = {
            title: selezionato,
            kg: valore,
            price: 0,
          };

          // Verifico se il prodotto è già presente nel carrello
          const prodottoEsistente = prodottiEsistenti.find((p) => p.title === selezionato);
          if (prodottoEsistente) {
            // Aggiorno la quantità del prodotto esistente
            prodottoEsistente.kg += valore;
        } else {
          // Altrimenti, aggiungo il nuovo prodotto all'array dei prodotti esistenti
          prodottiEsistenti.push(prodotto);
        }
      }
    }

      // per completare l'ordine devo ricavare i dati sui prodotti
      this.servizio.getProdotti(this.tipo).subscribe((datiProdotti: any) => {
        // costruisco l'array dell'ordine completo
        const ordineCompleto: any = prodottiEsistenti.map((o: any) => { // mappo ogni elemento di ordine (array incompleto)
          // cerco il dati del prodotto con titolo o.title
          const trovato = datiProdotti.products.find((x: any) => x.title = o.title);
          if (trovato) {
            o.price = trovato.price;
            o.minimumOrderQuantity = trovato.minimumOrderQuantity;
          }

          return o;
        })
        this.servizio.aggiungialcarrello(ordineCompleto);
        this.router.navigateByUrl('carrello');

      });
    }
  }
}