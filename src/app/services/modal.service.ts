import { Injectable } from '@angular/core';
import { Iitem } from '../interfaces/card.interface';
import { infoBlok } from '../interfaces/infoBlok.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  itemData?: Iitem | null;
  InfoBlokData?: infoBlok | null;
  type: string = '';

  // дата для модального окна (по необходимости для Iitem)
  setItemData(newData: Iitem | null): Iitem | null {
    return (this.itemData = newData);
  }

  getItemData(): Iitem | null {
    if (this.itemData) {
      return this.itemData;
    }
    return null;
  }

  // дата для модального окна (по необходимости для InfoBlok)
  setInfoBlokData(newData: infoBlok | null): infoBlok | null {
    return (this.InfoBlokData = newData);
  }

  getInfoBlokData(): infoBlok | null {
    if (this.InfoBlokData) {
      return this.InfoBlokData;
    }
    return null;
  }

  // модальное окно открывается если парметр type(строка) не пустой
  setType(value: string): string {
    return (this.type = value);
  }

  getType(): string {
    return this.type;
  }
}
