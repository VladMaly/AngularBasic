import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtraComponent } from './extra.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestGroupFormComponent } from './test-group-form/test-group-form.component';
import { OtherComponent } from './other/other.component';

const extraRoutes: Routes = [
    { path: 'extra', component: ExtraComponent, children: [
        { path: 'input-form', component: TestFormComponent, outlet: 'extraOutlet' },
        { path: 'input-group-form', component: TestGroupFormComponent, outlet: 'extraOutlet' },
        { path: 'other', component: OtherComponent, outlet: 'extraOutlet' }
    ] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(extraRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class ExtraRoutingModule { }
