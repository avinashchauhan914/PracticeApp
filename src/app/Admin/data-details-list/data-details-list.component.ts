import { Component, OnInit } from '@angular/core';
import { products } from '../../Admin/product';

@Component({
  selector: 'app-data-details-list',
  templateUrl: './data-details-list.component.html',
  styleUrls: ['./data-details-list.component.css']
})
export class DataDetailsListComponent implements OnInit {
  public gridData: any[] = products;

  constructor() {}

  ngOnInit() {}
}
