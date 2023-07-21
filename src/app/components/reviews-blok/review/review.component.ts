import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ireview } from 'src/app/interfaces/rewiew.interface';
import { NotificationService } from 'src/app/services/notification.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  constructor(private reviewService: ReviewsService,
    private notification: NotificationService) {}

  @Input() review?: Ireview;
  @Input() user?: boolean = false;

  private subscriptions$: Subscription = new Subscription();

  deleteReview(data: Ireview) {
    if (data.id) {
      const deleteReview$ = this.reviewService
        .removeReview(data.id)
        .subscribe((data) => {
          const prepareData =
            this.reviewService.reviewsDataBSubject.value.filter(
              (review) => review.id !== data.id
            );
          this.reviewService.reviewsDataBSubject.next(prepareData);
          this.notification.swithcVisible()
          this.notification.setData('Отзыв удален')
        });
      this.subscriptions$.add(deleteReview$);
    }
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
