import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';
import { DataService } from '../../services/data-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user;

  constructor(public navCtrl: NavController, public navParams: NavParams, private DataService: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupAndLogin() {
    this.DataService.register('/api/register', this.user)
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
}
