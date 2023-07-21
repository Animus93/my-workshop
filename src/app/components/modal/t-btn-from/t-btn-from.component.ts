import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TelegramApiService } from 'src/app/services/telegram-api.service';
import { Iitem } from 'src/app/interfaces/card.interface';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-t-btn-from',
  templateUrl: './t-btn-from.component.html',
  styleUrls: ['./t-btn-from.component.css'],
})
export class TBtnFromComponent {
  constructor(
    public modal: ModalService,
    private telegtam: TelegramApiService,
    private notification: NotificationService
  ) {}
  item: Iitem | null = this.modal.getItemData();
  isValidate: boolean = false;
  subscriptions: Subscription = new Subscription();
  getImg() {
    return `url(${this.item?.img})`;
  }
  closeModal() {
    this.modal.setType('');
  }

  applyForm = new FormGroup({
    contact: new FormControl('+7(959)', [
      Validators.required,
      Validators.minLength(14),
    ]),
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    caption: new FormControl(
      `Здравствуйте меня интересует ${this.modal.getItemData()?.title}`
    ),
    img: new FormControl(this.modal.getItemData()?.img),
  });
  submitApplication() {
    if (this.applyForm.status !== 'VALID') {
      this.isValidate = true;
      return;
    }
    const sendMessage$ = this.telegtam
      .sendTelegramMessage({
        contact: this.applyForm.value.contact ?? '',
        name: this.applyForm.value.name ?? '',
        caption: this.applyForm.value.caption ?? '',
        img: this.applyForm.value.img ?? '',
      })
      .subscribe((response) => {
        if (response.ok) {
          this.notification.swithcVisible();
          this.notification.setData(
            'заказ принят в ближайщее время мы свяжемся с вами'
          );
          this.modal.setType('');
        }
      });
    this.subscriptions.add(sendMessage$);
  }
  ngOnDestroy() {
    this.modal.setItemData(null);
    this.subscriptions.unsubscribe();
  }
}
