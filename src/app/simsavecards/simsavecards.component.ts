import { Component, OnInit } from '@angular/core';
import { Product } from '../simsaveproducts/simsaveproducts.model';
import { SimSaveProductsService } from '../simsaveproducts/simsaveproducts.service';

@Component({
    selector: 'simsavecards',
    templateUrl: './simsavecards.component.html',
    styleUrls: ['./simsavecards.component.css'],
  })
  export class SimSaveCardsComponent implements OnInit {
    products: Product[];
  
    constructor(private SimSaveProductsService: SimSaveProductsService) {}
  
    ngOnInit() {
      this.getProducts();
    }
  
    /**
     * Essa função encapsula o método do products service e retorna os produtos
     * em um array, atribuindo a this.products.
     */
    getProducts() {
      this.SimSaveProductsService
        .products()
        .subscribe((response) => (this.products = response.products));
    }
  }