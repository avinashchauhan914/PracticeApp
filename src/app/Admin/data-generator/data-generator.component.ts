import { Component, OnInit } from '@angular/core';
import { DataGenerator } from '../../Admin/models/data-generator.model';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent implements OnInit {
  public datageneratormodel: DataGenerator;
  public selectedQuantity: string;

  quantities: any[] = [
    { name: '500 gm' },
    { name: '1 Kg' },
    { name: '5 Kg' },
    { name: '10 Kg' },
    { name: '20 Kg' },
    { name: '30 Kg' },
    { name: '50 Kg' },
    { name: '60 Kg' },
    { name: '80 Kg' },
    { name: '100 Kg' }
  ];
  constructor() {
    this.datageneratormodel = new DataGenerator();
  }

  ngOnInit() {}

  submitData() {
    this.datageneratormodel.quantity = this.selectedQuantity;
    this.datageneratormodel.qty = Number(
      this.datageneratormodel.quantity['name'].match(/\d+/g)
    );
    this.datageneratormodel.brandPrice = Number(
      this.datageneratormodel.brandPrice
    );
    this.datageneratormodel.travelExpense = Number(
      this.datageneratormodel.travelExpense
    );
    this.datageneratormodel.minimumSalePrice = Number(
      this.datageneratormodel.minimumSalePrice
    );
    this.datageneratormodel.salePrice = Number(
      this.datageneratormodel.salePrice
    );
    this.datageneratormodel.totalExpense =
      this.datageneratormodel.brandPrice +
      this.datageneratormodel.travelExpense;
    console.log(this.datageneratormodel);
  }
  /* to get string from mixed data.  this.datageneratormodel.quantity['name'].match(/[a-zA-Z]+/g);*/
}
