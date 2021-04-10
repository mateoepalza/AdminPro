// modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

// Components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";

@NgModule({
    declarations:[
        DashboardComponent,
        Grafica1Component,
        ProgressComponent,
        PagesComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule
    ],
    exports:[
    ]
})
export class PagesModule{

}