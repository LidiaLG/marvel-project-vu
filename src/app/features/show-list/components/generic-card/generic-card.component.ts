import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent {
  @Input() dataApi: any[] = [];
  @Input() type: "series" | "comics" = "series";
  @Input() isLoading: boolean = false;
}
