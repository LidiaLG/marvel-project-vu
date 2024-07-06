import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesViewComponent } from '../series-view/series-view.component';
import { ComicsViewComponent } from '../comics-view/comics-view.component';
import { DetailsComicsComponent } from '../../details-comics/components/details-comics.component';


const routes: Routes = [
    {
      path: '', children: [
        {
          path: '', component: SeriesViewComponent 
        },
        {
          path: ':id/comic', children: [
            {
              path: '', component: ComicsViewComponent
            },
            {
              path: ':id', component: DetailsComicsComponent
            }
          ]
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }