import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLinkService } from 'src/app/services/api-link.service';

@Component({
  selector: 'app-top-fixed-panel',
  templateUrl: './top-fixed-panel.component.html',
  styleUrls: ['./top-fixed-panel.component.css'],
})
export class TopFixedPanelComponent {
  constructor(private api: ApiLinkService, private router: Router) {}
  @Input() title?: string;
  token?: any;

  validatePassword(e: Event) {
    if (sessionStorage.getItem('token')) {
      return this.toAdminPage();
    }
    e.preventDefault();
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
}
