import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityScrollComponent } from './infinity-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfinityScrollService } from './infinity-scroll.service';



@NgModule({
  declarations: [
    InfinityScrollComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
  ],
  exports: [
    InfinityScrollComponent,
  ],
  providers: [
    InfinityScrollService
  ],
})
export class AppInfinityScrollModule { }
