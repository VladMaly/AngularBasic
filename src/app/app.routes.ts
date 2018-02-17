import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ExtraComponent } from './extra/extra.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { BackendComponent } from './backend/backend.component';

// import { ComposeMessageComponent } from './compose-message.component';
// import { PageNotFoundComponent } from './not-found.component';

// import { CanDeactivateGuard } from './can-deactivate-guard.service';
// import { AuthGuard } from './auth-guard.service';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    // { path: 'extra', component: ExtraComponent},
    { path: 'localStorage', component: LocalStorageComponent},
    { path: 'templates', component: TemplatePracticeComponent},
    { path: 'backend', component: BackendComponent},
    // A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route.
    // The router throws an error if you don't. In this app, the router should select the route to the HeroListComponent
    // only when the entire URL matches '', so set the pathMatch value to 'full'.
    { path: '',   redirectTo: '/templates', pathMatch: 'full' },
    // {
    //     path: 'compose',
    //     component: ComposeMessageComponent,
    //     outlet: 'popup'
    // },
    // {
    //     path: 'admin',
    //     loadChildren: 'app/admin/admin.module#AdminModule',
    //     canLoad: [AuthGuard]
    // },
    // {
    //     path: 'crisis-center',
    //     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    //     data: { preload: true }
    // },
    // { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
    {   path: '**', component: PageNotFoundComponent,
        // redirectTo: '/Unknown',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(
        //     appRoutes,
        //     {
        //         enableTracing: true, // <-- debugging purposes only
        //         // preloadingStrategy: SelectivePreloadingStrategy,

        //     }
        // )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // CanDeactivateGuard,
        // SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
