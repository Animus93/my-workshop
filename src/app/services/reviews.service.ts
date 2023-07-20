import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ireview } from '../interfaces/rewiew.interface';
import { ApiLinkService } from './api-link.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private http: HttpClient, private apiLinks: ApiLinkService) {}
  //хранилище отзывов
  reviewsDataBSubject = new BehaviorSubject<Ireview[]>([]);
  //отправить отзыв
  postReviewForm(data: Ireview): Observable<Ireview> {
    return this.http.post<Ireview>(`${this.apiLinks.api2}/reviews`, {
      name: data.name,
      review: data.review,
    });
  }

  //получить массив отзывов
  getReviews(): Observable<Ireview[]> {
    return this.http.get<Ireview[]>(`${this.apiLinks.api2}/reviews`);
  }

  //удалить отзыв
  removeReview(id: string): Observable<Ireview> {
    return this.http.delete<Ireview>(`${this.apiLinks.api2}/reviews/${id}`);
  }
}
