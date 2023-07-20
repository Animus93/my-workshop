import { Component, Input } from '@angular/core';
import { Iitem } from '../../interfaces/card.interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-telegram-button',
  templateUrl: './telegram-button.component.html',
  styleUrls: ['./telegram-button.component.css'],
})
export class TelegramButtonComponent {
  @Input() item!: Iitem;
  constructor(public modal: ModalService) {}

  createMessage() {
    this.modal.setItemData(this.item);
    this.modal.setType('t-btn-from');
  }
}
