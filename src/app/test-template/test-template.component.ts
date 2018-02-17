import { Component, OnInit, TemplateRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-template',
  templateUrl: './test-template.component.html',
  styleUrls: ['./test-template.component.styl']
})
export class TestTemplateComponent implements OnInit {
  @ViewChild('king1') kingCustom: TemplateRef<any>;
  @Input() kingInput: TemplateRef<any> = null;

  constructor() {
  }

  ngOnInit() {
    if (this.kingInput != null) {
      this.kingCustom = this.kingInput;
    }
  }

}
