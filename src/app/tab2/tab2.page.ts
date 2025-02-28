import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonInput, IonButton, FormsModule, CommonModule],
})
export class Tab2Page {

  usuario = '';
  contrasena = '';

  constructor(private usersService: UsersService, private router: Router) { }

  redirigirRegistro(){
    this.router.navigate(['tabs/tab1'])
  }

  iniciarSesion() {
    const data = {
      usuario: this.usuario,
      pass: this.contrasena
    };

    this.usersService.loginUser(data).subscribe(response => {
      console.log(response);
      if (response.Mensaje === "Login exitoso") {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['tabs/tab3'])
      } else {
        alert('Credenciales incorrectas');
      }
    }, error => {
      console.error(error);
      alert('Error al iniciar sesión');
    });
  }
}