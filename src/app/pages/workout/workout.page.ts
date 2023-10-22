import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonModal, IonDatetime, IonButtons, IonPopover } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { calendarNumber,ellipsisVertical} from 'ionicons/icons';
import { ExerciseCardComponent } from 'src/app/components/exercise-card/exercise-card.component';



@Component({
  selector: 'workout-page',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent,
     DatePipe, 
     IonButton,
     IonButtons,
     IonIcon,
    IonModal,
    IonDatetime,
  IonPopover,
ExerciseCardComponent],
})
export class Tab1Page {
  date = new Date();

  constructor() {addIcons({calendarNumber,ellipsisVertical})}
}
