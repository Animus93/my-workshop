import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-page',
  templateUrl: './administrator-page.component.html',
  styleUrls: ['./administrator-page.component.css']
})
export class AdministratorPageComponent {
  constructor(private router: Router){}
ngOnInit () {
  if(sessionStorage.getItem('token')){
    return
  }
  return this.router.navigate(['']);

}
}
