import { Component } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { ModalService } from 'src/app/services/modal.service';
import { SlideInterface } from 'src/app/interfaces/slider.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-slider',
  templateUrl: './admin-slider.component.html',
  styleUrls: ['./admin-slider.component.css'],
})
export class AdminSliderComponent {
  constructor(private modal: ModalService, public api: SliderService) {}
  public visible: boolean = !true;
  sliderData$: Observable<SlideInterface[]> = this.api.sliderDataBSubject$;
  private subscriptions$: Subscription = new Subscription();
  toggle() {
    return this.visible = !this.visible;
  }
  ngOnInit(): void {
    const getSliderData$ = this.api
      .getSliderImg()
      .subscribe((data) => this.api.sliderDataBSubject$.next(data));
    this.subscriptions$.add(getSliderData$);
  }

  addSliderImg(): void {
    this.modal.setType('slider-edit-form');
  }
  getUrl(url: string): string {
    return `url(${url})`;
  }
  removeSlide(id: string): void {
    const removeSliderData$ = this.api.removeSlide(id).subscribe((data) => {
      const prepareData = this.api.sliderDataBSubject$.value.filter(
        (slide) => slide.id !== data.id
      );
      return this.api.sliderDataBSubject$.next(prepareData);
    });
    this.subscriptions$.add(removeSliderData$);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
