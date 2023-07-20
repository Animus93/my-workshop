import { Component, Input } from '@angular/core';
import { infoBlok } from 'src/app/interfaces/infoBlok.interface';

@Component({
  selector: 'app-info-blok-item',
  templateUrl: './info-blok-item.component.html',
  styleUrls: ['./info-blok-item.component.css'],
})
export class InfoBlokItemComponent {
  @Input() blok!: infoBlok;
}
