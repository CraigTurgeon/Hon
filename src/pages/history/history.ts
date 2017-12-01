import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AskPage } from '../ask/ask';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  tab: string = "history"; // default button
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  askTab() {this.navCtrl.setRoot(AskPage); }
  historyTab() {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
