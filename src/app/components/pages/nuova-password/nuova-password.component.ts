import { Component } from '@angular/core';

@Component({
  selector: 'app-nuova-password',
  templateUrl: './nuova-password.component.html',
  styleUrls: ['./nuova-password.component.scss']
})
export class NuovaPasswordComponent {

  proceduraCompleta = false;
  showAlert = false;

  salvaPassword() {
    this.proceduraCompleta = true;
    this.showAlert = true;
    setTimeout(() => {


      this.showAlert = false;
    },

      3000);
  }

  validaPassword($event: any) {

    const myForm: any = $event.target;
    if (!myForm.checkValidity()) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    else {
      this.salvaPassword();
    }
    myForm.classList.add('was-validated');
  }

}