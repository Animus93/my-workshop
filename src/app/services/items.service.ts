import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLinkService } from './api-link.service';
import { Iitem } from '../interfaces/card.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient, private apiLinks: ApiLinkService) {}
  itemsDataBSubject$ = new BehaviorSubject<Iitem[]>([]);

  //получить массив товаров
  getItems(): Observable<Iitem[]> {
    return this.http.get<Iitem[]>(`${this.apiLinks.api1}/items`);
  }

  getItem(id: number) {
    return this.http.get<Iitem>(`${this.apiLinks.api1}/items/${id}`);
  }

  postItem(data: Iitem): Observable<Iitem> {
    return this.http.post<Iitem>(`${this.apiLinks.api1}/items`, {
      title: data.title,
      img: data.img,
      price: data.price,
      description: data.description,
    });
  }

  putItem(data: Iitem): Observable<Iitem> {
    console.log('put data ', data);
    return this.http.put<Iitem>(`${this.apiLinks.api1}/items/${data.id}`, {
      title: data.title,
      img: data.img,
      price: data.price,
      description: data.description,
    });
  }

  deleteItem(id: number): Observable<Iitem> {
    return this.http.delete<Iitem>(`${this.apiLinks.api1}/items/${id}`);
  }
}
