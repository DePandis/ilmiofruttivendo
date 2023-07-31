import { Component } from '@angular/core';

@Component({
  selector: 'app-reimposta-password',
  templateUrl: './reimposta-password.component.html',
  styleUrls: ['./reimposta-password.component.scss']
})
export class ReimpostaPasswordComponent {

  validate($event: any) {
    const myForm: any = $event.target;
    if (!myForm.checkValidity()) {
      $event.preventDefault()
      $event.stopPropagation()
    }
    myForm.classList.add('was-validated')
  }

}
