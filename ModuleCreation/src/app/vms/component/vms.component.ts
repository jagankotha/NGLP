import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import Product from "src/app/common/model/product.model";
import { ProductService } from "src/app/common/service/product.service";

@Component({
    selector:'vms',
    templateUrl: './vms.component.html',
})

export class VmsComponent{
    constructor(private service:ProductService){}

    ngOnInit(){
        this.service.getProducts('vms').subscribe((posRes:Product[])=>{
         console.log("posRes    "+posRes);
        },(errRes:HttpErrorResponse)=>{
           console.log(errRes);
        })
    }
}

