import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './features/auth/auth-view/auth-view.component';
import { authGuard } from './core/guards/auth.guard';



const routes: Routes = [
  {
    path: '', component: AuthViewComponent
  },
  {
    path: 'series', loadChildren: () => import('./features/show-list/modules/list.module')
    .then(m => m.ListModule),  
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
