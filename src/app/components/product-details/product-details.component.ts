import { Component } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { IProduct } from '../list-product/IProduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  detailedProduct!:IProduct
  constructor(private productServ: ProductsDataService){
     this.detailedProduct = this.productServ.detailedProduct;
  }
}
