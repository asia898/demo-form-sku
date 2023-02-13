import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html'
})
export class DemoFormWithEventsComponent {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    })
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('Event, sku changed to: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('Event, form changed to: ', form);
      }
    )
  }

  onSubmited(value: string) {
    console.log('Form has been submitted. New value is: ', value);
  }
}
