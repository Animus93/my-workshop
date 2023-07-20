import { Component } from '@angular/core';
import { Subscription, concatMap, map } from 'rxjs';
import { SlideInterface } from 'src/app/interfaces/slider.interface';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  constructor(private api: SliderService) {}
  sliderArr: SlideInterface[] = [];
  sliderid: any;
  sliderSubscription$: Subscription = new Subscription();

  autoSlide(): void {
    if (!this.sliderid) {
      this.sliderid = setInterval(() => {
        this.onNextSlide();
      }, 3000);
    }
  }

  currentSlide: number = 0;

  ngOnInit() {
    const Slider = this.api
      .getSliderImg()
      .pipe(
        map((data) => this.api.sliderDataBSubject$.next(data)),
        concatMap(() => this.api.sliderDataBSubject$)
      )
      .subscribe((data) => {
        if (this.sliderArr.length !== data.length) {
          this.sliderArr = data.reverse();
          if (this.sliderArr.length > 2) {
            this.autoSlide();
          }
        }
      });
    this.sliderSubscription$.add(Slider);
  }

  getCurrentSlideUrl(): string {
    return `url('${this.sliderArr[this.currentSlide].url}')`;
  }

  onNextSlide(): void {
    if (this.currentSlide === this.sliderArr.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
    // console.log('next', this.currentSlide, this.sliderid);
  }

  ngOnDestroy() {
    clearInterval(this.sliderid);
    this.sliderSubscription$.unsubscribe();
  }
}
