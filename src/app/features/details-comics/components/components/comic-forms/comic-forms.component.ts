import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { IComics } from '../../../../../core/interfaces/comics.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComicUtilCreators, ComicUtilImage } from '../../../utils/comic.util';

@Component({
  selector: 'app-comic-forms',
  templateUrl: './comic-forms.component.html',
  styleUrl: './comic-forms.component.scss'
})
export class ComicFormsComponent {
  @Input() comic!: IComics;
  private fb = inject(FormBuilder);
  public comicForm!: FormGroup;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['comic'] && this.comic) {
      this.initForm();
    }
  }

  private initForm() {
    this.comicForm = this.fb.group({
      title: [this.comic.title],
      description: [this.comic.description],
      pageCount: [this.comic.pageCount],
      creators: [ComicUtilCreators(this.comic)],
      date: [this.comic.dates.length > 0 ? this.comic.dates[0].date : '']
    });
  }

  // public comicForm: FormGroup = this.fb.group({
  //   title: [this.comic.title],
  //   description: [this.comic.description],
  //   pageCount: [this.comic.pageCount],
  //   creators: [this.comic.creators],
  //   dates: [this.comic.dates]
  // })

  getImage(): string | undefined {
    return ComicUtilImage(this.comic)
  }
}
