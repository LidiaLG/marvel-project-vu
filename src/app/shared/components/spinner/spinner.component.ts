import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
      if( !this.url ) throw new Error('URL property is required');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
