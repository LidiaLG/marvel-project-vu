import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ComicsViewComponent } from '../comics-view/comics-view.component';
import { SeriesViewComponent } from '../series-view/series-view.component';
import { GenericCardComponent } from '../components/generic-card/generic-card.component';
import { ListRoutingModule } from './list-routing.module';
import { DetailsComicsComponent } from '../../details-comics/details-comics.component';


@NgModule({
  declarations: [
    ComicsViewComponent, 
    SeriesViewComponent, 
    GenericCardComponent,
    DetailsComicsComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
