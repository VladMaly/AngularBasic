import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ExtraRoutingModule } from './extra-routing.module';

import { TestCompModule } from './../test-comp/test-comp.module';
import { ExtraComponent } from './extra.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestGroupFormComponent } from './test-group-form/test-group-form.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    ExtraComponent,
    TestFormComponent,
    TestGroupFormComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ExtraRoutingModule,
    TestCompModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: []
})
export class ExtraModule { }
