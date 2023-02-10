import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component'
import { DemoFormWithValidations } from './demo-form-with-validations/demo-form-with-validations.component';
import { DemoFormWithValidationsNoInstance } from './demo-form-with-validations-no-instance/demo-form-with-validations-no-instance.component';
import { DemoFormCustomValidationComponent } from './demo-form-custom-validation/demo-form-custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidations,
    DemoFormWithValidationsNoInstance,
    DemoFormCustomValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
