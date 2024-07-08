import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from '../components/auth.component';
import { AuthViewComponent } from '../auth-view/auth-view.component';



@NgModule({
  declarations: [AuthComponent, AuthViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
