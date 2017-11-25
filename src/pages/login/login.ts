import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';
import { DataService } from '../../services/data-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {email: null, password: null};

  constructor(public navCtrl: NavController, public navParams: NavParams, private DataService: DataService) {}

  login() {
    this.DataService.register('/api/login', this.user)
    .subscribe(result => {
      this.navCtrl.push(TabsPage);
      console.log('result', result);
    }, err => {
      console.log('err', err);
    });
  }
  cancel() {
    this.navCtrl.push(WelcomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
