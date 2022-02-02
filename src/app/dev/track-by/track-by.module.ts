import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackByComponent } from './track-by.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TrackByComponent,
  }
];

@NgModule({
  declarations: [
    TrackByComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TrackByComponent,
  ]
})
export class TrackByModule { }
