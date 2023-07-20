import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ireview } from 'src/app/interfaces/rewiew.interface';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews-blok',
  templateUrl: './reviews-blok.component.html',
  styleUrls: ['./reviews-blok.component.css'],
})
export class ReviewsBlokComponent {
  @Input() user:boolean = false
  constructor(private reviewsService: ReviewsService) {}

  reviews$: Observable<Ireview[]> = this.reviewsService.reviewsDataBSubject;
  private subscriptions$: Subscription = new Subscription();
  ngOnInit(): void {
    const getData = this.reviewsService.getReviews().subscribe((data) => {
      this.reviewsService.reviewsDataBSubject.next(data);
    });
    this.subscriptions$.add(getData);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
