import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/module/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { ComicsViewComponent } from '../comics-view/comics-view.component';
import { SeriesViewComponent } from '../series-view/series-view.component';
import { GenericCardComponent } from '../components/generic-card/generic-card.component';
import { DetailsComicsComponent } from '../../details-comics/components/details-comics.component';
import { ComicFormsComponent } from '../../details-comics/components/components/comic-forms/comic-forms.component';


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
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ListModule { }
