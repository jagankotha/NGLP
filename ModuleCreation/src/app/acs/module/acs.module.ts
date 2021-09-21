import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/common/module/common.module";
import { ACSComponent } from "../component/acs.component";

@NgModule({
    declarations:[],
    imports:[CommonModule, RouterModule.forChild([{path:"", component:ACSComponent}]), SharedModule],
    providers:[],
    exports:[ACSComponent]
})
export class ACSModule{}