import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})
export class AskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  answerTab() { }
  historyTab() { this.navCtrl.setRoot(HistoryPage); }
}
