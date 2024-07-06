import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicFormsComponent } from './comic-forms.component';

describe('ComicFormsComponent', () => {
  let component: ComicFormsComponent;
  let fixture: ComponentFixture<ComicFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
