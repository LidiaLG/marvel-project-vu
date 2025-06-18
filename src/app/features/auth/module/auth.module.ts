import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from '../components/auth.component';
import { AuthViewComponent } from '../auth-view/auth-view.component';
import { InfoFormComponent } from '../components/info-form/info-form/info-form.component';



@NgModule({
  declarations: [AuthComponent, AuthViewComponent, InfoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
