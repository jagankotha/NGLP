import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductService } from "../service/product.service";

@NgModule({
declarations:[],
imports:[CommonModule, HttpClientModule],
providers:[ProductService],
exports:[SharedModule]
})
export class SharedModule{}