import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit{
  authForm!: FormGroup;
  private fb = inject(FormBuilder);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);


  ngOnInit(): void {
    this.authForm = this.fb.group({
      public_key: ['', Validators.required],
      private_key: ['', Validators.required]
    })
  }

  onSubmit(): void {
      const public_key: string | null = this.authForm.value.public_key;
      const private_key: string | null = this.authForm.value.private_key;
      if (public_key && private_key) {
        const hash = this.localStorageService.generateHash( private_key, public_key );
        this.localStorageService.setHash( 'marvelHash', hash );
        //para guardar también la public_key
        this.localStorageService.setPublicKey( public_key );
        console.log('todo ok', hash)
        
        this.router.navigate(['/series']);
      } else {
        console.error('No se ha ingresado la clave pública o privada');
      }
  }

}
