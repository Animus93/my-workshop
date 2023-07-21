import { Component } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { ModalService } from 'src/app/services/modal.service';
import { SlideInterface } from 'src/app/interfaces/slider.interface';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-slider',
  templateUrl: './admin-slider.component.html',
  styleUrls: ['./admin-slider.component.css'],
})
export class AdminSliderComponent {
  constructor(private modal: ModalService, public api: SliderService,
    private notification: NotificationService) {}
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
      this.notification.swithcVisible()
      this.notification.setData('Изображение удалено из слайдера')
      return this.api.sliderDataBSubject$.next(prepareData);
    });
    this.subscriptions$.add(removeSliderData$);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
