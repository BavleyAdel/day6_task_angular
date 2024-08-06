import { Component } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { IProduct } from './IProduct';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  allProducts: IProduct[] = [];
  searchId!: number;
  constructor(private productServ: ProductsDataService) {}
  // hook
  ngOnInit() {
    this.productServ.getAllProducts().subscribe((response) => {
      this.allProducts = response;
    });
  }

  searchProduct(productId: number):void {

    this.productServ.getProductById(productId).subscribe((response) => {
      this.productServ.detailedProduct = response;
    });
  }
}
