import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import Product from "src/app/common/model/product.model";
import { ProductService } from "src/app/common/service/product.service";

@Component({
    selector:"cameras",
    templateUrl: "./camera.component.html"
})

export class CamerasComponent{
    constructor(private service:ProductService){}

    ngOnInit(){
        this.service.getProducts('cameras').subscribe((posRes:Product[])=>{
        console.log("positive response is  "+posRes);
        },(errRes:HttpErrorResponse)=>{
           console.log(errRes);
        })
    }
}

