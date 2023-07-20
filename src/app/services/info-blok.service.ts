import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLinkService } from './api-link.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { infoBlok } from '../interfaces/infoBlok.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoBlokService {
  constructor(private http: HttpClient, private apiLinks: ApiLinkService) {}

  infoBloksSubject$ = new BehaviorSubject<infoBlok[]>([]);

  getInfoBloks(): Observable<infoBlok[]> {
    return this.http.get<infoBlok[]>(`${this.apiLinks.api3}/info`);
  }

  postInfoBlok(blok: infoBlok): Observable<infoBlok> {
    return this.http.post<infoBlok>(`${this.apiLinks.api3}/info`, {
      ...blok,
    });
  }
  deleteInfoBlok(id: Number): Observable<infoBlok> {
    return this.http.delete<infoBlok>(`${this.apiLinks.api3}/info/${id}`);
  }

  putInfoBlok(data: infoBlok): Observable<infoBlok> {
    return this.http.put<infoBlok>(`${this.apiLinks.api3}/info/${data.id}`,{
      ...data
    });
  }
}
