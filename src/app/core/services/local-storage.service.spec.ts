import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from '../../features/show-list/services/data.service';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../environments/environments';



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
          title: 'Comic 1', 
          description: 'Description 1', 
          thumbnail: { path: 'path1', extension: 'jpg' }, 
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
          title: 'Comic 1', 
          description: 'Description 1', 
          thumbnail: { path: 'path1', extension: 'jpg' }, 
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

    const mockHttp = httpCtrl.expectOne(`${API_URL}/series?ts=1&apikey=publicKey&hash=hash`);
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

    const mockHttp = httpCtrl.expectOne(`${API_URL}/series/${seriesId}/comics?ts=1&apikey=publicKey&hash=hash`);
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

    const mockHttp = httpCtrl.expectOne(`${API_URL}/comics/${comicId}?ts=1&apikey=publicKey&hash=hash`);
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual("GET");

    mockHttp.flush(MOCK_COMICS_RESPONSE);
  });

  afterEach(() => {
    httpCtrl.verify();
  });

  //comprobación con error
  it('should handle error 400 for getSeries', () => {
    service.getSeries().subscribe({
      next: () => fail('expected an error, not series'),
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.status).withContext('status').toEqual(400);
      }
    });

    const mockHttp = httpCtrl.expectOne(`${API_URL}/series?ts=1&apikey=publicKey&hash=hash`);
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual("GET");

    mockHttp.flush("Bad request", { status: 400, statusText: 'Bad Request' });
  });

  afterEach(() => {
    httpCtrl.verify();
  });
});
