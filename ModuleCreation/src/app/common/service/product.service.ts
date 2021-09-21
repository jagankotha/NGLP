import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Product from "../model/product.model";

@Injectable({
    providedIn:"root"
})

export class ProductService{
    constructor(private http:HttpClient){}


    public getProducts(categery:String):Observable<Product[]>{
        return this.http.get<Product[]>(`http://localhost:8080/products/${categery}`)
    }
}