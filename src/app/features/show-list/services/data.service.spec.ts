import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpCtrl: HttpTestingController;

  const DATA_RESPONE = [
    {
      
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
