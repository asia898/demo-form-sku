import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup
} from '@angular/forms';

@Component({
    selector: 'app-demo-form-sku-with-builder',
    templateUrl: './demo-from-sku-with-builder.component.html',
    styles: []
})

export class DemoFormSkuWithBuilderComponent implements OnInit {
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }

    ngOnInit() {}

    
}