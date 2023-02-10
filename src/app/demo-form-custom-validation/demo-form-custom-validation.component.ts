import { Component } from "@angular/core";
import {
    FormBuilder,
    FormGroup
} from '@angular/forms';

@Component({
    selector: 'app-demo-form-custom-validation',
    templateUrl: './demo-form-custom-validation.component.html'
})

export class DemoFormCustomValidationComponent{
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'birthDate': ['']
        })
    }

    onSubmit(value: string): void {
        console.log('Form was submitted. New value is: ', value);
    }
}