import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ACSComponent } from "src/app/acs/component/acs.component";
import { SharedModule } from "src/app/common/module/common.module";
import { CamerasComponent } from "../component/camera.component";

@NgModule({
    declarations:[CamerasComponent],
    imports:[CommonModule,  SharedModule],
    providers:[],
    exports:[CamerasComponent]
})
export class CAMERASModule{}