import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLogged = new Subject<boolean>;
  carrello: any[] = [];
  private carrelloSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public carrello$: Observable<Product[]> = this.carrelloSubject.asObservable();

  private apiUrl = 'assets/db.json';

  constructor(private http: HttpClient) { }

  login(): Observable<any[]> {
    const url = '/api/login';
    return this.http.get<any[]>(url);
  }
  logout() {
    this.isLogged.next(false);
  }

  getAllproducts(): Observable<any[]> {
    const url = '/api/products';
    return this.http.get<any[]>(url);
  }
  aggiungialcarrello(ordine: any) {
    ordine.forEach((o: any) => this.carrello.push(o));
    //    this.carrello.push(ordine);
  }
  getCarrello() {
    return this.calcolaOrdine({ products: this.carrello });
  }
  inserisciOrdine(ordine: any) {
    this.carrello.push(ordine);
  }
  eliminaOrdine(prodotto: any) {
    const posizioneProdotto = this.carrello.indexOf(prodotto);
    if (posizioneProdotto > -1) {
      this.carrello.splice(posizioneProdotto, 1);
    }
  }

  getOrdine(id: string) {
    const url = '/api/ordini/' + id;
    return this.http.get<any[]>(url);
  }


  getProdotti(tipo: string) {
    const url = '/api/products/' + tipo;
    return this.http.get<any[]>(url);
  }


  private calcolaOrdine(ordine: any) {
    ordine.totale = 0;
    for (let i = 0; i < ordine.products.length; i++) {
      const prodotto = ordine.products[i];
      const kg = prodotto.kg ? prodotto.kg : 1;
      const minimo = prodotto.minimumOrderQuantity ? prodotto.minimumOrderQuantity : 1;

      // valorizzando il prezzo totale del prodotto i-esimo
      const prezzoTotale = prodotto.price * kg / minimo;;
      ordine.products[i].prezzoTotale = prezzoTotale;

      // aggiorniamo il totale
      ordine.totale += prezzoTotale;
    }
    const sconto = ordine.totale * 0.3;
    ordine.totale -= sconto;

    ordine.sconto = (ordine.totale * 30 / 100).toFixed(2)
    ordine.iva = (ordine.totale * 4 / 100).toFixed(2);
    ordine.totale = ordine.totale.toFixed(2)
    return ordine;
  }

  getOrdineCalcolato(id: string) {
    const url = '/api/ordini/' + id;
    return this.http.get<any[]>(url).pipe(map(this.calcolaOrdine));
  }

  // Metodo per condividere l'array del carrello
  aggiungiCarrello(carrello: Product[]): void {
    this.carrelloSubject.next(carrello);
  }

  getUser(): Observable<User[]> {
    const url = "api/utente";
    return this.http.get<any>(url);
  }

  updateUser(updatedUser: User): Observable<any> {
    const url = `${this.apiUrl}/utente/${updatedUser.username}`;
    return this.http.put<any>(url, updatedUser);
  }
}
