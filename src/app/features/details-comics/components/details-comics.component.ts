import { Component, inject, OnInit } from '@angular/core';
import { IComics } from '../../../core/interfaces/comics.interface';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../show-list/services/data.service';

@Component({
  selector: 'app-details-comics',
  templateUrl: './details-comics.component.html',
  styleUrl: './details-comics.component.scss'
})
export class DetailsComicsComponent implements OnInit{
  comic!: IComics;

  private routeActive = inject(ActivatedRoute);
  private dataService = inject(DataService);

  ngOnInit() {
    this.routeActive.params.subscribe((params) => {
      this.dataService.getComicsById(params['id']).subscribe((data) => {
        this.comic = data[0];
        console.log(this.comic, "holiii");
      });
    });
  }

  // getImage(): string | undefined {
  //   if (this.comic?.thumbnail) {
  //     const { path, extension } = this.comic.thumbnail;
  //     return `${path}.${extension}`;
  //   }
  //   return undefined;
  // }

}
