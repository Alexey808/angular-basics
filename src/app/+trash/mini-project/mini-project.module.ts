import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniProjectComponent } from './components/mini-project.component';
import { HomeForMiniProjectComponent } from './home-mini-project/home-for-mini-project.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    MiniProjectComponent,
    HomeForMiniProjectComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
  exports: [
    MiniProjectComponent
  ]
})
export class AppMiniProjectModule { }
