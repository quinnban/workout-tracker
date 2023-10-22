import { Component, OnInit } from '@angular/core';
import { IonCard,IonCardContent, IonInput, IonPicker, IonButton, IonTitle, IonCardHeader, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { PickerComponent } from '../picker/picker.component';

@Component({
  selector: 'exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
  standalone:true,
  imports:[IonCard,IonCardContent,IonCardHeader,IonInput,IonPicker,IonButton, IonTitle, IonGrid,IonRow,IonCol,PickerComponent]
})
export class ExerciseCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
