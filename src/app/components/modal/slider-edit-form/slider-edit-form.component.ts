import { Component } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { ModalService } from 'src/app/services/modal.service';
import { Subscription } from 'rxjs';
import { SlideInterface } from 'src/app/interfaces/slider.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-slider-edit-form',
  templateUrl: './slider-edit-form.component.html',
  styleUrls: ['./slider-edit-form.component.css'],
})
export class SliderEditFormComponent {
  constructor(private api: SliderService, private modal: ModalService,
    private notification: NotificationService) {}
  url: string = '';
  updSlider$?: Subscription;
  getUrl() {
    return `url(${this.url})`;
  }

  addImg() {
    this.updSlider$ = this.api
      .addSliderImg(this.url)
      .subscribe((data: SlideInterface) => {
        const temp: SlideInterface[] = [
          ...this.api.sliderDataBSubject$.value,
          data,
        ];
        this.api.sliderDataBSubject$.next(temp);
        this.modal.setType('');
        this.notification.swithcVisible()
        this.notification.setData('Изображение добавленно в слайдер')
      });
  }

  ngOnDestroy() {
    this.updSlider$?.unsubscribe();
  }
}
