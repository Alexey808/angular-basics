import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycardEditComponent } from './mycard-edit.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MycardEditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MycardEditComponent
  ]
})
export class MycardEditModule { }
