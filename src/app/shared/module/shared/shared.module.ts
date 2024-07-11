import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { GoBackBtnComponent } from '../../components/go-back-btn/go-back-btn.component';
import { GoBackDirective } from '../../directives/go-back.directive';
import { Error404Component } from '../../pages/error404/error404.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    DateFormatPipe,
    GoBackBtnComponent,
    GoBackDirective,
    Error404Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    DateFormatPipe,
    GoBackBtnComponent,
    GoBackDirective,
    Error404Component
  ]
})
export class SharedModule { }
