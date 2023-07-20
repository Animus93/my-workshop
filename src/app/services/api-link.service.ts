import { Injectable } from '@angular/core';
import { token } from '../interfaces/token.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiLinkService {
  constructor(private http: HttpClient) {}
  //т.к бесплатная версия mockapi.io позволяет создать только 2 эндпоинта используется несколько разных бд
  //endpoints item(товары), data(пароль)
  api1: string =
    'https://64a678dd096b3f0fcc7fd73c.mockapi.io/myWorkShopApi/v1/';
  //endpoints sldier(картинки слайдера), reviews (отзывы)
  api2: string =
    'https://64a7ad65dca581464b848f66.mockapi.io/myWorkShopApi/v2/';
  //endpoints info(инфоблок) faq (вопрсо-ответы)
  api3: string =
    'https://64b64467df0839c97e153de4.mockapi.io/myWorkShopApi/v3/';
  // проверка пароля
  validate() {
    return this.http.get<token[]>(`${this.api1}/data`);
  }
}
