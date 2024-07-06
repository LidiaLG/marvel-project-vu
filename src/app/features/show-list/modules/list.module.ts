import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ComicsViewComponent } from '../comics-view/comics-view.component';
import { SeriesViewComponent } from '../series-view/series-view.component';
import { GenericCardComponent } from '../components/generic-card/generic-card.component';
import { ListRoutingModule } from './list-routing.module';
import { DetailsComicsComponent } from '../../details-comics/components/details-comics.component';
import { ComicFormsComponent } from '../../details-comics/components/components/comic-forms/comic-forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComicsViewComponent, 
    SeriesViewComponent, 
    GenericCardComponent,
    DetailsComicsComponent,
    ComicFormsComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
