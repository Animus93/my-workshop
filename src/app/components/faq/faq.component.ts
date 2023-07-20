import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifaq } from 'src/app/interfaces/faq.interface';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FAQComponent {
  constructor(private faqService: FaqService) {}
  faqBlok$: Observable<Ifaq[]> = this.faqService.getFAQ();
}