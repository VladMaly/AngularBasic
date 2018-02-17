import { Component, ViewChild, TemplateRef } from '@angular/core';

import * as styles from '../globalStyles/styleg.styl';
import * as _ from 'underscore';

console.log(styles);
console.log(styles.blueC);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app';
  css = styles;

  constructor() {
  }
}
