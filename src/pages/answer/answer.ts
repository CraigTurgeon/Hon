import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'answer.html'
})
export class AnswerPage {

  constructor(public navCtrl: NavController, private DataService: DataService) {}

  ngOnInit() {
    this.DataService.getQuestions('/api/questions')
      .subscribe(result => {
        console.log('result', result);
      }, err => {
        console.log('er', err);
      });
  }
}
