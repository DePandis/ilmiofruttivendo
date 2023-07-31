import { Component } from '@angular/core';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  faFacebookF=faFacebookF;
  faGoogle=faGoogle;
  faTwitter=faTwitter;

  proceduraCompleta = false;
  showAlert = false;

  salvaRegistrazione() {
    this.proceduraCompleta = true;
    this.showAlert = true;
    setTimeout(() => {
      
     
      this.showAlert = false;
          }, 
         
      3000);
        }

  validaRegistrazione($event: any) {

    const myForm: any = $event.target;
    if (!myForm.checkValidity()) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    else {
      this.salvaRegistrazione();
    }
    myForm.classList.add('was-validated');
  }

}