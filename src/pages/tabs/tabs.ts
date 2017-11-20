import { Component } from '@angular/core';

import { AskPage } from '../ask/ask';
import { AnswerPage } from '../answer/answer';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = AskPage;
  tab2Root = HomePage;
  tab3Root = AnswerPage;

  constructor() {

  }
}
