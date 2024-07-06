import { DataService } from '../services/data.service';
import { Component, inject, OnInit } from '@angular/core';
import { ISeries } from '../../../core/interfaces/series.interface';

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrl: './series-view.component.scss'
})
export class SeriesViewComponent implements OnInit{
  series: ISeries[] = [];
  private dataService = inject(DataService);

  ngOnInit(): void {
    this.dataService.getSeries().subscribe(
      (data) => {
        this.series = data;
        console.log(this.series);
      }
    )
  }

}
