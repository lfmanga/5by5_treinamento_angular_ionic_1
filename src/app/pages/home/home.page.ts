import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public form: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private loadingCtrl: LoadingController,
    private navCtrl : NavController
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message : 'Autenticando...'
    });

    loading.present();

    this.service
      .auth(this.form.value)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('student', JSON.stringify(res.student));
        loading.dismiss();
        this.navCtrl.navigateRoot('courses');
      })
  }
}
