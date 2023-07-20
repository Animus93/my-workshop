import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Iitem } from 'src/app/interfaces/card.interface';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
})
export class ItemPageComponent {
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService
  ) {}
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  item$: Observable<Iitem> = this.itemService.getItem(this.id);
}
