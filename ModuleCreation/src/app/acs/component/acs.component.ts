import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import Product from 'src/app/common/model/product.model';
import { ProductService } from 'src/app/common/service/product.service';
declare var $: any;
@Component({
  selector: 'acs',
  templateUrl: './acs.component.html',
})
export class ACSComponent {
  constructor(private service: ProductService) {}
  acsList: Product[] = [];
  ngOnInit() {
    this.service.getProducts('acs').subscribe(
      (posRes: Product[]) => {
        this.acsList = posRes;
        console.log(' product service data is' + posRes);
      },
      (errRes: HttpErrorResponse) => {
        console.log(errRes);
      }
    );

  }

}
