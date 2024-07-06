import { Component, inject } from '@angular/core';
import { IComics } from '../../../core/interfaces/comics.interface';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comics-view',
  templateUrl: './comics-view.component.html',
  styleUrl: './comics-view.component.scss'
})
export class ComicsViewComponent {
  comics: IComics[] = [];

  private routeActive = inject(ActivatedRoute);
  private dataService = inject(DataService);

  ngOnInit(): void {
    const id = +this.routeActive.snapshot.paramMap.get('id')!;
    this.dataService.getComicsBySeriesId(id).subscribe((data) => {
      this.comics = data;
    }); 
  }

}
