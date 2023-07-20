import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SlideInterface } from '../interfaces/slider.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiLinkService } from './api-link.service';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private http: HttpClient, private apiLinks: ApiLinkService) {}
  //хранилище картинок
  sliderDataBSubject$ = new BehaviorSubject<SlideInterface[]>([]);

  //получить массив слайдов
  getSliderImg(): Observable<SlideInterface[]> {
    return this.http.get<SlideInterface[]>(`${this.apiLinks.api2}/slider`);
  }

  // добавить изображение в слайдер
  addSliderImg(data: string): Observable<SlideInterface> {
    return this.http.post<SlideInterface>(`${this.apiLinks.api2}/slider`, {
      url: data,
    });
  }
  // удалить изображение из слайдера
  removeSlide(id: string): Observable<SlideInterface> {
    return this.http.delete<SlideInterface>(
      `${this.apiLinks.api2}/slider/${id}`
    );
  }
}
// Subject

// guard
