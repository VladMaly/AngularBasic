import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-group-form',
  templateUrl: './test-group-form.component.html',
  styleUrls: ['./test-group-form.component.styl']
})
export class TestGroupFormComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('Isabella of Castile', Validators.maxLength(10)),
      age: new FormControl(20, Validators.required),
      city: new FormControl(),
      country: new FormControl()
    });
  }

  onFormSubmit() {
    console.log(this.userForm.get('name').value);
  }

  get userName(): any {
    return this.userForm.get('name');
  }

  setDefaultValue() {
    this.userForm.setValue({name: 'Silence of the lambs', age: 20, city: '', country: ''});
  }

}
