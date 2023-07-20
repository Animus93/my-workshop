import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { infoBlok } from 'src/app/interfaces/infoBlok.interface';
import { InfoBlokService } from 'src/app/services/info-blok.service';

@Component({
  selector: 'app-info-blok',
  templateUrl: './info-blok.component.html',
  styleUrls: ['./info-blok.component.css'],
})
export class InfoBlokComponent {
  constructor(private infoBlokService: InfoBlokService){}

  bloks$: Observable<infoBlok[]> = this.infoBlokService.getInfoBloks()
}
