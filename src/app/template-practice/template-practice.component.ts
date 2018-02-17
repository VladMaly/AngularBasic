import { Component, ViewChild, TemplateRef, OnInit, Input } from '@angular/core';

import * as _ from 'underscore';

import { TestTemplateComponent } from '../test-template/test-template.component';
import { TestCompComponent } from '../test-comp/test-comp.component';

@Component({
  selector: 'app-template-practice',
  templateUrl: './template-practice.component.html',
  styleUrls: ['./template-practice.component.styl']
})
export class TemplatePracticeComponent implements OnInit {
  testSubject: any;
  @ViewChild('templateName') kingTemp: TemplateRef<any>;
  openTemplateComponent: any;
  testArray = [5, 4, 3, 2, 1];

  constructor() {
    console.log('Example 1: ' + _.first(this.testArray));
    this.testSubject = this.test();

    this.openTemplateComponent = TestTemplateComponent;
  }

  ngOnInit(): void {
    console.log('Exa: ' + this.kingTemp);
  }

  test(): any {
    return _.first(this.testArray);
  }

  changeComp(): any {
    this.openTemplateComponent = TestCompComponent;
  }

}
