import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { telegramMessage } from '../interfaces/telegram-message.interface';

@Injectable({
  providedIn: 'root',
})
export class TelegramApiService {
  constructor(private http: HttpClient) {}
  private telegramBotToken: string =
    '6392083072:AAHKqaDO3sBsxcseYtu8RGG6-dfDTr-jkPU';
  private ChatId: string = '1029758975';

  sendTelegramMessage(data: telegramMessage): Observable<any> {
    return this.http.post(
      `https://api.telegram.org/bot${this.telegramBotToken}/sendPhoto`,
      {
        chat_id: this.ChatId,
        photo: data.img,
        caption: `НОВЫЙ ЗАКАЗ ---->${data.name} ${data.contact} ${data.caption}`,
      }
    );
  }
}
