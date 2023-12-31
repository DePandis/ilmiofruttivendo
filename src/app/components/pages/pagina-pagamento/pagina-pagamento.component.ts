import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-pagina-pagamento',
  templateUrl: './pagina-pagamento.component.html',
  styleUrls: ['./pagina-pagamento.component.scss']
})
export class PaginaPagamentoComponent {
  proceduraPagamentoCompleta = false;

  constructor(private router: Router, private route: ActivatedRoute, private servizio: CommonService) {
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      console.log("LISTENER SUL FORM", form);
      form.addEventListener('submit', (event: any) => {
        console.log("PASSO DA QUI ", event);
        const myForm: any = form;
        if (!myForm.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }

  proceduraPagamento($event: any) {
    console.log("PASSO DA QUI ", $event);
    const myForm: any = $event.target;
    if (!myForm.checkValidity()) {
      $event.preventDefault()
      $event.stopPropagation()
    } else {
      const risposta = confirm("Vuoi procedere con il pagamento?");
      if (risposta) {
        this.proceduraPagamentoCompleta = true;
        this.router.navigateByUrl('avvenuto-pagamento');
      }
    }
    myForm.classList.add('was-validated')
  }
  ordineId: any= '';
  datiOrdine: any ={};

  ngOnInit() {
    this.datiOrdine = this.servizio.getCarrello(true);
  }

}
