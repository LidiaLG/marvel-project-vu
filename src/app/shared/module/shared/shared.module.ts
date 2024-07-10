import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { DateFormatPipe } from '../../pipes/date-format.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    DateFormatPipe,
  ]
})
export class SharedModule { }
