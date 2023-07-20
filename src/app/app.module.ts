import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/card/card.component';
import { TelegramButtonComponent } from './components/telegram-button/telegram-button.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { InfoBlokComponent } from './components/info-blok/info-blok.component';
import { InfoBlokItemComponent } from './components/info-blok/info-blok-item/info-blok-item.component';
import { ReviewsBlokComponent } from './components/reviews-blok/reviews-blok.component';
import { ReviewComponent } from './components/reviews-blok/review/review.component';
import { FAQComponent } from './components/faq/faq.component';
import { BottomFixedPanelComponent } from './components/bottom-fixed-panel/bottom-fixed-panel.component';
import { HorizontalScrollDirective } from './services/app-horizontal-scroll.directive';
import { ReviewFormComponent } from './components/reviews-blok/review-form/review-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/banner/slider/slider.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopFixedPanelComponent } from './components/top-fixed-panel/top-fixed-panel.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { AdministratorPageComponent } from './components/administrator-page/administrator-page.component';
import { AdminSliderComponent } from './components/administrator-page/admin-slider/admin-slider.component';
import { TBtnFromComponent } from './components/modal/t-btn-from/t-btn-from.component';
import { SliderEditFormComponent } from './components/modal/slider-edit-form/slider-edit-form.component';
import { AdminReviewsComponent } from './components/administrator-page/admin-reviews/admin-reviews.component';
import { AdminItemsComponent } from './components/administrator-page/admin-items/admin-items.component';
import { ItemEditFormComponent } from './components/modal/item-edit-form/item-edit-form.component';
import { AdminInfoComponent } from './components/administrator-page/admin-info/admin-info.component';
import { AdminFaqComponent } from './components/administrator-page/admin-faq/admin-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BodyComponent,
    CardComponent,
    TelegramButtonComponent,
    MaxLengthPipe,
    InfoBlokComponent,
    InfoBlokItemComponent,
    ReviewsBlokComponent,
    ReviewComponent,
    FAQComponent,
    BottomFixedPanelComponent,
    HorizontalScrollDirective,
    ReviewFormComponent,
    SliderComponent,
    ItemPageComponent,
    MainPageComponent,
    TopFixedPanelComponent,
    ContactPageComponent,
    ModalComponent,
    AdministratorPageComponent,
    AdminSliderComponent,
    TBtnFromComponent,
    SliderEditFormComponent,
    AdminReviewsComponent,
    AdminItemsComponent,
    ItemEditFormComponent,
    AdminInfoComponent,
    AdminFaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
