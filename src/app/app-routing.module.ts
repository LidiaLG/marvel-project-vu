import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { SeriesViewComponent } from './features/show-list/series-view/series-view.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'series', loadChildren: () => import('./features/show-list/modules/list.module')
    .then(m => m.ListModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
