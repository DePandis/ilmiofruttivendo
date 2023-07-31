import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrls: ['./accesso.component.scss']
})
export class AccessoComponent {

  loginRes: any;
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;

  ngOnInit() { }

  activeNavbar() {
    this.commonService.isLogged.next(true);
  }

  proceduraAccessoCompleta = false;

  constructor(private commonService: CommonService, private router: Router) {
    const forms = document.querySelectorAll('.needs-validation');

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

  proceduraAccesso($event: any) {
    console.log("PASSO DA QUI ", $event);
    const myForm: any = $event.target;
    if (!myForm.checkValidity()) {
      $event.preventDefault()
      $event.stopPropagation()
    } else {
      const risposta = confirm("Verifica di Inserimento Dati avvenuta con successo!");
      if (risposta) {
        this.proceduraAccessoCompleta = true;
        this.activeNavbar();
        this.router.navigateByUrl('');
      }
    }
    myForm.classList.add('was-validated')
  }

  validaAccesso($event: any) {
    const myForm: any = $event.target;
    if (!myForm.checkValidity()) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    myForm.classList.add('was-validated');
  }

}