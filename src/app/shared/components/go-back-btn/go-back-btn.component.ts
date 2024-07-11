import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-back-btn',
  templateUrl: './go-back-btn.component.html',
  styleUrl: './go-back-btn.component.scss'
})
export class GoBackBtnComponent {

  @Input() text: string = '';
  @Input() clickHandler?: () => void;

  onClick() {
    if (this.clickHandler) {
      this.clickHandler();
    }
  }
}
