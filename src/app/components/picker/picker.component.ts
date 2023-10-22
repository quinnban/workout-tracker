import { Component, DestroyRef, Input, OnInit, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonIcon, IonPicker } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDown} from 'ionicons/icons';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss'],
  standalone:true,
  imports:[IonButton,IonPicker,IonIcon, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PickerComponent),
      multi: true
    }
  ]
})
export class PickerComponent  implements OnInit,  ControlValueAccessor {
  @Input() name!: string;
  @Input() lowerBound! : number;
  @Input() upperBound! : number;
  value: FormControl = new FormControl();
  id = Math.random()
  onTouched!: () => {};
  destroyRef = inject(DestroyRef);

  column!:any;
  pickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value: { [x: string]: { value: any; }; }) => {
        this.value.patchValue(value["REPS"].value);
      },
    },
  ];

  constructor() { addIcons({chevronDown})}

  ngOnInit(): void {
    this.column = [{
      name: 'REPS',
      options: this.getColumn(),
    }];

    
  
  }

  getColumn() {
    const options = [];
    for(let i = this.lowerBound; i <= this.upperBound; i++){
      options.push({text: i, value: i});
    }
    return options
  }

  registerOnChange(fn: any): void {
   this.value.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(val => {console.log(val); fn(val)});
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    !!value ? this.value.patchValue(value) : setTimeout(() => this.value.reset(), 0);
  }

}
