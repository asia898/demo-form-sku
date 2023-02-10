import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-demo-form-with-validations-no-instance',
    templateUrl: './demo-form-with-validations-no-instance.component.html'
})

export class DemoFormWithValidationsNoInstance{
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'address': ['', Validators.required]
        });
    }

    onSubmited(value: string): void {
        console.log('Form submitted. New value is: ', value);
    }
}
