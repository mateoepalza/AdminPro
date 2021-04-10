import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// modules
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

/**
 * Components
 */
import { PagesRoutingModule } from "./pages/pages-routing.module";


const routes: Routes = [
    // path: 'dashboard' PagesRouting
    // path
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '**', component: NopagefoundComponent },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {

}