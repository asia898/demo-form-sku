import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    AbstractControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-demo-form-with-validations',
    templateUrl: './demo-form-with-validations.component.html'
})

export class DemoFormWithValidations{
    myForm: FormGroup;
    zipCode: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'zipCode': ['', Validators.required]
        });

        this.zipCode = this.myForm.controls['zipCode'];
    }

    onSubmited(value: string): void {
        console.log('Form submitted. New value is: ', value);
    }
}
