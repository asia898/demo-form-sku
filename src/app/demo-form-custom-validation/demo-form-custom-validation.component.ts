import { Component } from "@angular/core";
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-demo-form-custom-validation',
    templateUrl: './demo-form-custom-validation.component.html'
})

export class DemoFormCustomValidationComponent{
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'birthDate': ['', Validators.compose([
                Validators.required,
                birthDateValidator
            ])]
        })
    }

    onSubmit(value: string): void {
        console.log('Form was submitted. New value is: ', value);
    }
}

function birthDateValidator(control: FormControl): { [s: string]: boolean } {
    if(!control.value.match(/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)[0-9]{2}/)) {
        return {invalidBirthDate: true};
    }
    return {invalidBirthDate: false};
}