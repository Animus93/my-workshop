import { Component, Input } from '@angular/core';
import { Iitem } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item!: Iitem;

  getImg(): string {
    return `url(${this.item.img})`;
  }

}

