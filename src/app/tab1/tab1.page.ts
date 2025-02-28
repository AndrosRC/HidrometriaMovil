import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { UsersService } from '../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonInput, IonButton, FormsModule,CommonModule],
})
export class Tab1Page {

  usuario = '';
  name = '';
  contrasena = '';

  constructor(private usersService: UsersService, private router: Router) {}

  redirigirInicio(){
    this.router.navigate(['tabs/tab2'])
  }

  registrarUsuario() {
    //Verifica si todos los campos estan llenos
    if (!this.usuario || !this.name || !this.contrasena) {
      alert('Por favor, completa todos los campos antes de registrar.');
      return;
    }
  
    const data = {
      usuario: this.usuario,
      name: this.name,
      pass: this.contrasena
    };
  
    this.usersService.postRegistro(data).subscribe(response => {
      console.log(response);
      alert('Usuario registrado con éxito');
      this.router.navigate(['tabs/tab2']);
    }, error => {
      console.error(error);
      alert('Error al registrar usuario');
    });
  }
}