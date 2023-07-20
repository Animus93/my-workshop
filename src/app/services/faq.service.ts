import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLinkService } from './api-link.service';
import { Ifaq } from '../interfaces/faq.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient, private apiLinks: ApiLinkService) {}

  faqSubject$ = new BehaviorSubject<Ifaq[]>([]);

  getFAQ(): Observable<Ifaq[]> {
    return this.http.get<Ifaq[]>(`${this.apiLinks.api3}/faq`);
  }

  postFAQItem(blok: Ifaq): Observable<Ifaq> {
    return this.http.post<Ifaq>(`${this.apiLinks.api3}/faq`, {
      ...blok,
    });
  }
  deleteFAQItem(id: Number): Observable<Ifaq> {
    return this.http.delete<Ifaq>(`${this.apiLinks.api3}/faq/${id}`);
  }

  putFAQItem(data: Ifaq): Observable<Ifaq> {
    return this.http.put<Ifaq>(`${this.apiLinks.api3}/faq/${data.id}`,{
      ...data
    });
  }
}
