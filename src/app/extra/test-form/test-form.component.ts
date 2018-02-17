import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.styl']
})
export class TestFormComponent implements OnInit {
  name = new FormControl('Clovis I', [Validators.required, Validators.maxLength(15)]);

  constructor() { }

  ngOnInit() {
  }

  setNameValue() {
      this.name.setValue('Abraham Lincoln');
      console.log('Name: ' + this.name.value);
      console.log('Validation Status: ' + this.name.status);
  }

  setResetName() {
      this.name.reset();
      // this.name.disable();
      // this.name.enable();
  }

  changeValue() {
      // console.log(this.married.value);
      // this.married = new FormControl(!this.married.value);
  }

}
