import { Component, OnInit } from '@angular/core';
import { DataGenerator } from '../../Admin/models/data-generator.model';

@Component({
  selector: 'app-data-details-list',
  templateUrl: './data-details-list.component.html',
  styleUrls: ['./data-details-list.component.css']
})
export class DataDetailsListComponent implements OnInit {
  public responseDataList: DataGenerator[] = [];

  cols: DataGenerator[];

  constructor() {}

  ngOnInit() {
    // this.productService.getProductsSmall().then(data => this.products = data);
  }
}
