import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/simsaveproducts/simsaveproducts.model';

@Component({
  selector: 'simsavesinglecards',
  templateUrl: './simsavesinglecards.component.html',
  styleUrls: ['./simsavesinglecards.component.css'],
})
export class SimSaveSingleCardsComponent implements OnInit {
  @Input() product: Product;

  colorStyle: string;

  constructor() {}

  ngOnInit() {
    this.colorStyle = `color: ${this.product.color}`;
  }
}