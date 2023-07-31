import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-profilo-utente',
  templateUrl: './profilo-utente.component.html',
  styleUrls: ['./profilo-utente.component.scss']
})
export class ProfiloUtenteComponent {
  user: any;
  userProfilePic: string | undefined;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getUser();
  }

  salvataggioOK = false;
  salvataggioDatiOK = false;

  salvaDati() {
    this.commonService.updateUser(this.user).subscribe(
      (response) => {
        console.log('Dati utente aggiornati con successo:', response);
    this.salvataggioDatiOK = true;
    setTimeout(() => {
      this.salvataggioDatiOK = false;
    }, 4500);
  },
  (error) => {
    console.error('Errore durante l\'aggiornamento dei dati utente:', error);
  }
);
}

  getUser() {
    this.commonService.getUser().subscribe((res: User[]) => {
      this.user = res[0];
      this.userProfilePic = this.user?.profilePic;
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.userProfilePic = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  salvaFoto() {
    // Save the file to the server or perform any other necessary operations here
    this.salvataggioOK = true;
    setTimeout(() => {
      this.salvataggioOK = false;
    }, 3000);
  }
}
