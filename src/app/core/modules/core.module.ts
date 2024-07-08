import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LocalStorageService } from '../services/local-storage.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VerifyInterceptor } from '../interceptors/verify.interceptor';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { DataService } from '../../features/show-list/services/data.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeaderComponent],
  providers: [
    LocalStorageService,
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: VerifyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
