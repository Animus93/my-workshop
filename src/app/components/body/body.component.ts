import { Component } from '@angular/core';
import { Iitem } from '../../interfaces/card.interface';
import { Observable } from 'rxjs';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  constructor(private itemService: ItemsService) {}
  data$: Observable<Iitem[]> = this.itemService.getItems();
}
