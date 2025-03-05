import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardTitle, IonList, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { HTTPClient } from '@angular/common/http';

import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonCard, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent]
})

export class Tab4Page {

  apiHost: string = "https://hidrometriaapi.onrender.com"; 

  constructor(private http: HTTPClient) {}

  // Función para enviar el ping al servidor
  enviarPing() {
    this.http.post(`${this.apiHost}/ping`, { mensaje: "ESP32 activo" })
      .subscribe(response => {
        console.log(response);
        alert('Ping enviado con éxito');
      }, error => {
        console.error(error);
        alert('Error al enviar el ping');
      });
  }

  // Función para abrir la válvula
  abrirValvula() {
    const tiempo = 5; // Tiempo de apertura en segundos
    this.http.post(`${this.apiHost}/abrir`, { tiempo })
      .subscribe(response => {
        console.log(response);
        alert('Válvula abierta');
      }, error => {
        console.error(error);
        alert('Error al abrir la válvula');
      });
  }

  // Función para cerrar la válvula
  cerrarValvula() {
    this.http.get(`${this.apiHost}/cerrar`)
      .subscribe(response => {
        console.log(response);
        alert('Válvula cerrada');
      }, error => {
        console.error(error);
        alert('Error al cerrar la válvula');
      });
  }

  // Función para medir el flujo
  medirFlujo() {
    const tiempo = 10; // Tiempo de medición en segundos
    // Aquí puedes agregar la lógica de cómo medir el flujo.
    this.http.post(`${this.apiHost}/flujo`, { tiempo })
      .subscribe(response => {
        console.log(response);
        alert('Medición de flujo realizada');
      }, error => {
        console.error(error);
        alert('Error al medir flujo');
      });
  }
}
