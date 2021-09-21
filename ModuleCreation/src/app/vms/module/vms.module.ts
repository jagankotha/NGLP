import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ACSComponent } from "src/app/acs/component/acs.component";
import { SharedModule } from "src/app/common/module/common.module";
import { CamerasComponent } from "../component/camera.component";
import { VmsComponent } from "../component/vms.component";

@NgModule({
    declarations:[VmsComponent],
    imports:[CommonModule,  SharedModule,RouterModule.forChild([{path:'',component:VmsComponent}]),HttpClientModule],
    providers:[],
    exports:[VmsComponent]
})
export class VmsModule{}