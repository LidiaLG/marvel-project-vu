import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsViewComponent } from './comics-view.component';

describe('ComicsViewComponent', () => {
  let component: ComicsViewComponent;
  let fixture: ComponentFixture<ComicsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
