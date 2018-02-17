import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { TestCompModule } from './test-comp/test-comp.module';
import { TestTemplateComponent } from './test-template/test-template.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { ExtraModule } from './extra/extra.module';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { BackendComponent } from './backend/backend.component';


@NgModule({
  declarations: [
    AppComponent,
    TestTemplateComponent,
    PageNotFoundComponent,
    TemplatePracticeComponent,
    LocalStorageComponent,
    BackendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ExtraModule,
    AppRoutingModule,
    TestCompModule
  ],
  providers: [],
  entryComponents: [TestCompComponent, TestTemplateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
