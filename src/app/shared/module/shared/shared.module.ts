import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { GoBackBtnComponent } from '../../components/go-back-btn/go-back-btn.component';
import { GoBackDirective } from '../../directives/go-back.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    DateFormatPipe,
    GoBackBtnComponent,
    GoBackDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    DateFormatPipe,
    GoBackBtnComponent,
    GoBackDirective
  ]
})
export class SharedModule { }
