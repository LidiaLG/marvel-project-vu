import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './features/auth/module/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/modules/core.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeightTextareaDirective } from './shared/directives/height-textarea.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeightTextareaDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
