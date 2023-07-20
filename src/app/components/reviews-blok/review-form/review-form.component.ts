import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent {
  constructor(private reviewService: ReviewsService) {}

  isValidate: boolean = false;
  private subscriptions$: Subscription = new Subscription();

  applyForm = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    review: new FormControl('', [
      Validators.maxLength(150),
      Validators.minLength(4),
      Validators.required,
    ]),
  });
  get descriptionLength(): number {
    const value = this.applyForm.get('review')?.value?.length;
    if (value !== undefined) {
      const count = 150 - value >= 0 ? 150 - value : 0;
      return count;
    }
    return 0;
  }

  checkField(field: string): boolean {
    if (
      this.applyForm.get(`${field}`)?.invalid &&
      (this.applyForm.get(`${field}`)?.dirty ||
        this.applyForm.get(`${field}`)?.touched ||
        this.isValidate)
    ) {
      return true;
    }
    return false;
  }
  submitApplication() {
    if (this.applyForm.status !== 'VALID') {
      this.isValidate = true;
    } else {
      const postReview$ = this.reviewService
        .postReviewForm({
          name: this.applyForm.value.name ?? '',
          review: this.applyForm.value.review ?? '',
        })
        .subscribe((data) => {
          this.reviewService.reviewsDataBSubject.next([
            ...this.reviewService.reviewsDataBSubject.value,
            data,
          ]);
          alert(` ${this.applyForm.value.name} cпасибо за отзыв!`);
          this.applyForm.reset();
        });
      this.subscriptions$.add(postReview$);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
