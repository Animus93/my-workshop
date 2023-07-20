import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { infoBlok } from 'src/app/interfaces/infoBlok.interface';
import { InfoBlokService } from 'src/app/services/info-blok.service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css'],
})
export class AdminInfoComponent {
  constructor(private infoBlokService: InfoBlokService) {}
  visible = !true;
  subscriptions$: Subscription = new Subscription();
  itemSubject$: Observable<infoBlok[]> = this.infoBlokService.infoBloksSubject$;

  ngOnInit() {
    const getData = this.infoBlokService.getInfoBloks().subscribe((data) => {
      this.infoBlokService.infoBloksSubject$.next(data);
    });
    this.subscriptions$.add(getData);
  }

  applyForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  editInfo(item: infoBlok) {
    if (item.title.length && item.description.length) {
      const edit = this.infoBlokService.putInfoBlok(item).subscribe((data) => {
        this.editInfoData(data);
        alert('Изменения сохранены')
      });
      this.subscriptions$.add(edit);
    }
  }
  editInfoData(data: infoBlok) {
    const prepereData: infoBlok[] =
      this.infoBlokService.infoBloksSubject$.value.map((item) => {
        if (item.id == data.id) {
          (item.title = data.title), (item.description = data.description);
        }
        return item;
      });
    this.infoBlokService.infoBloksSubject$.next(prepereData);
  }
  createInfo() {
    if (this.applyForm.valid) {
      const postInfoBlok = this.infoBlokService
        .postInfoBlok({
          title: this.applyForm.value.title || '',
          description: this.applyForm.value.description || '',
        })
        .subscribe((data) => {
          const prepereData = [
            ...this.infoBlokService.infoBloksSubject$.value,
            data,
          ];
          this.infoBlokService.infoBloksSubject$.next(prepereData);
          this.applyForm.reset();
          alert('Запись добавлена')
        });
      this.subscriptions$.add(postInfoBlok);
    }
  }
  toggle() {
    this.visible = !this.visible;
  }
  deleteBlok(id: number | undefined) {
    if (id) {
      const removeBlok = this.infoBlokService
        .deleteInfoBlok(id)
        .subscribe((data) => {
          const prepereData =
            this.infoBlokService.infoBloksSubject$.value.filter(
              (item) => item.id !== data.id
            );
          this.infoBlokService.infoBloksSubject$.next(prepereData);
        });
      this.subscriptions$.add(removeBlok);
    }
  }
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
