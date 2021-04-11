// modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "../components/components.module";
import { SharedModule } from "../shared/shared.module";

// Components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations:[
        DashboardComponent,
        Grafica1Component,
        ProgressComponent,
        PagesComponent,
        AccountSettingsComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule,
        ComponentsModule,
    ],
    exports:[
    ]
})
export class PagesModule{

}