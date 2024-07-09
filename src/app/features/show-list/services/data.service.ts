import { environment } from './../../../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ISeries } from '../../../core/interfaces/series.interface';
import { DataApi } from '../../../core/model/data.model';
import { IComics } from '../../../core/interfaces/comics.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = environment.apiUrl;
  private localStorageService = inject(LocalStorageService);

  constructor(private http: HttpClient) {}

  private getParams(): HttpParams {
    const ts = '1'; 
    const publicKey = this.localStorageService.getPublicKey()!;
    const hash = this.localStorageService.getHash()!;

    return new HttpParams()
      .set('ts', ts)
      .set('apikey', publicKey)
      .set('hash', hash);
  }

  getSeries(): Observable<ISeries[]> {
    const params = this.getParams();
    return this.http.get<DataApi<ISeries>>(`${this.apiUrl}/series`, { params }).pipe(
      map((data) => data.data.results)
    );
  }

  getComicsBySeriesId(id: number): Observable<IComics[]> {
    const params = this.getParams();
    return this.http.get<DataApi<IComics>>(`${this.apiUrl}/series/${id}/comics`, { params }).pipe(
      map((data) => data.data.results)
    );
  }

  getComicsById( id: number ): Observable<IComics[]> {
    const params = this.getParams();
    return this.http.get<DataApi<IComics>>(`${this.apiUrl}/comics/${id}`, { params }).pipe(
      map((data) => data.data.results)
    );
  }
}
