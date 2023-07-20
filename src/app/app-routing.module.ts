import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AdministratorPageComponent } from './components/administrator-page/administrator-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'contacts',
    component: ContactPageComponent,
  },
  {
    path: 'administrator',
    component: AdministratorPageComponent,
  },
  {
    path: ':fragment',
    component: MainPageComponent,
  },
  {
    path: 'detail/:id',
    component: ItemPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
