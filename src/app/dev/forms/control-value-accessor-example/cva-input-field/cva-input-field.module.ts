import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvaInputFieldComponent } from './cva-input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CvaInputFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CvaInputFieldComponent,
  ]
})
export class CvaInputFieldModule { }
