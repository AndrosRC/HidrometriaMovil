import { Component } from '@angular/core';
import { IonButton, IonInput,IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonTextarea, IonCard, IonLabel } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput,IonItem, IonHeader, IonButton, FormsModule, IonSelect, IonSelectOption, IonTextarea, IonCard, IonLabel],
})
export class Tab3Page {
  constructor() {}
  ngOnInit(){
  }
}
