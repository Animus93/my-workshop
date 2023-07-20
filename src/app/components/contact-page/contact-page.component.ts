import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLinkService } from 'src/app/services/api-link.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  constructor(private api: ApiLinkService, private router: Router) {}
  @Input() title?: string;
  token?: any;

  validatePassword() {
    if (sessionStorage.getItem('token')) {
      return this.toAdminPage();
    }
    const password = prompt('Введите пароль администратора');
    if (password?.length) {
      this.api.validate().subscribe((data) => {
        if (data.find((item) => item.token === password)) {
          sessionStorage.setItem('token', 'true');
          return this.toAdminPage();
        }
        return;
      });
    }
    return;
  }
  toAdminPage() {
    if (sessionStorage.getItem('token')) {
      return this.router.navigate(['administrator']);
    }
    return;
  }
  temp() {
    alert('у меня нету)');
  }
}
