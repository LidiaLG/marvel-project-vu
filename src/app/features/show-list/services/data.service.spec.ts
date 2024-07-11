// import { DataService } from './data.service';
// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

// import { ISeries } from '../../../core/interfaces/series.interface';
// import { DataApi } from '../../../core/model/data.model';

// describe('DataService', () => {
//   let service: DataService;
//   let httpCtrl: HttpTestingController;

//   const SERIES_RESPONSE: DataApi<ISeries> = {
//     code: 200,
//     status: 'Ok',
//     data: {
//       results: [
//         {
//           id: 1,
//           title: 'Series Title 1',
//           description: 'Description 1',
//           thumbnail: { path: 'path1', extension: 'jpg' },
//           pageCount: 100,
//           creators: {
//             available: 2,
//             collectionURI: 'uri',
//             items: [
//               { resourceURI: 'uri1', name: 'Creator 1', role: 'Writer' },
//               { resourceURI: 'uri2', name: 'Creator 2', role: 'Artist' }
//             ]
//           },
//           dates: [{ type: 'onsaleDate', date: 'new Date()' }]
//         },
//         {
//           id: 2,
//           title: 'Series Title 2',
//           description: 'Description 2',
//           thumbnail: { path: 'path2', extension: 'jpg' },
//           pageCount: 200,
//           creators: {
//             available: 2,
//             collectionURI: 'uri',
//             items: [
//               { resourceURI: 'uri2', name: 'Creator 2', role: 'Writer' },
//               { resourceURI: 'uri3', name: 'Creator 3', role: 'Artist' }
//             ]
//           },
//           dates: [{ type: 'onsaleDate', date: 'new Date()' }]
//         }
//       ]
//     }
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports:[HttpClientTestingModule],
//     });
//     service = TestBed.inject(DataService);
//     httpCtrl = TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('Should return series from Http Get call.', () => {
//     service.getSeries()
//       .subscribe({
//         next: (response) => {
//           expect(response).toBeTruthy();
//           expect(response.length).toBeGreaterThan(1);
//         }
//       });

//       const mockHttp = httpCtrl.expectOne(`${service.apiUrl}series?`);
//       expect(mockHttp.request.method).toEqual('GET');
//       mockHttp.flush(SERIES_RESPONSE);
//   });

//   it('Should return error message for DataService Http request.', () => {
//     service.getSeries()
//     .subscribe({
//         error: (error) => {
//           expect(error).toBeTruthy();
//           expect(error.status).withContext('status').toEqual(401);
//         }
//     });

//     const mockHttp = httpCtrl.expectOne(`${service.apiUrl}series?`);
//     const httpRequest = mockHttp.request;

//     mockHttp.flush("error request", { status: 401, statusText: 'Unathorized access' });
//   });

// });
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { environment } from './../../../../environments/environments';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ISeries } from '../../../core/interfaces/series.interface';
import { IComics } from '../../../core/interfaces/comics.interface';

describe('DataService', () => {
  let service: DataService;
  let httpCtrl: HttpTestingController;
  let localStorageService: LocalStorageService;

  const API_URL = environment.apiUrl;
  const MOCK_SERIES_RESPONSE = {
    code: 200,
    status: 'Ok',
    data: {
      results: [
        { id: 1, 
          title: 'Series 1',
           description: 'Description 1', 
           thumbnail: { 
            path: 'path1', 
            extension: 'jpg' }, 
           pageCount: 100, 
           creators: { 
            available: 1, 
            collectionURI: 'uri1', 
            items: [{ 
              resourceURI: 'resourceURI1', 
              name: 'Creator 1', 
              role: 'Role 1' }] }, 
            dates: [{ 
              type: 'type1', 
              date: 'date1' }] }
      ]
    }
  };

  const MOCK_COMICS_RESPONSE = {
    code: 200,
    status: 'Ok',
    data: {
      results: [
        { id: 1, 
          title: 'Series 1',
           description: 'Description 1', 
           thumbnail: { 
            path: 'path1', 
            extension: 'jpg' }, 
           pageCount: 100, 
           creators: { 
            available: 1, 
            collectionURI: 'uri1', 
            items: [{ 
              resourceURI: 'resourceURI1', 
              name: 'Creator 1', 
              role: 'Role 1' }] }, 
            dates: [{ 
              type: 'type1', 
              date: 'date1' }] }
      ]
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocalStorageService]
    });

    service = TestBed.inject(DataService);
    httpCtrl = TestBed.inject(HttpTestingController);
    localStorageService = TestBed.inject(LocalStorageService);

    spyOn(localStorageService, 'getPublicKey').and.returnValue('publicKey');
    spyOn(localStorageService, 'getHash').and.returnValue('hash');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch series', () => {
    service.getSeries().subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.length).toBeGreaterThan(0);
    });

    const mockHttp = httpCtrl.expectOne(`${API_URL}/series?apikey=publicKey&hash=hash`);
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual("GET");

    mockHttp.flush(MOCK_SERIES_RESPONSE);
  });

  it('should fetch comics by series id', () => {
    const seriesId = 1;

    service.getComicsBySeriesId(seriesId).subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.length).toBeGreaterThan(0);
    });

    const mockHttp = httpCtrl.expectOne(`${API_URL}/series/${seriesId}/comics?apikey=publicKey&hash=hash`);
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual("GET");

    mockHttp.flush(MOCK_COMICS_RESPONSE);
  });

  it('should fetch comics by id', () => {
    const comicId = 1;

    service.getComicsById(comicId).subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.length).toBeGreaterThan(0);
    });

    const mockHttp = httpCtrl.expectOne(`${API_URL}/comics/${comicId}?apikey=publicKey&hash=hash`);
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual("GET");

    mockHttp.flush(MOCK_COMICS_RESPONSE);
  });

  it('should handle error 400 for getSeries', () => {
    service.getSeries().subscribe({
      next: () => fail('expected an error, not series'),
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.status).withContext('status').toEqual(400);
      }
    });

    const mockHttp = httpCtrl.expectOne(`${API_URL}/series?apikey=publicKey&hash=hash`);
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual("GET");

    mockHttp.flush("Bad request", { status: 400, statusText: 'Bad Request' });
  });

  afterEach(() => {
    httpCtrl.verify();
  });
});
