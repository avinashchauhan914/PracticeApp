import { Component, OnInit } from '@angular/core';
import { DataGenerator } from '../../Admin/models/data-generator.model';
import { numberConverterPipe } from '../../pipes/numberConverter.pipe';
import { numberSplitterPipe } from '../../pipes/numberSplitter.pipe';
import { stringSplitterPipe } from '../../pipes/stringSplitter.pipe';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent implements OnInit {
  public datageneratormodel: DataGenerator;
  public numberSplitterPipe: numberSplitterPipe;
  public stringSplitterPipe: stringSplitterPipe;
  public numberConverterPipe: numberConverterPipe;
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
    this.numberSplitterPipe = new numberSplitterPipe();
    this.stringSplitterPipe = new stringSplitterPipe();
    this.numberConverterPipe = new numberConverterPipe();
  }

  ngOnInit() {}

  submitData() {
    this.datageneratormodel.quantity = this.numberSplitterPipe.transform(
      this.selectedQuantity['name']
    );
    this.datageneratormodel.measure = this.stringSplitterPipe.transform(
      this.selectedQuantity['name']
    );
    this.datageneratormodel.brandPrice = this.numberConverterPipe.transform(
      this.datageneratormodel.brandPrice
    );
    this.datageneratormodel.travelExpense = this.numberConverterPipe.transform(
      this.datageneratormodel.travelExpense
    );
    this.datageneratormodel.minimumSalePrice = this.numberConverterPipe.transform(
      this.datageneratormodel.minimumSalePrice
    );
    this.datageneratormodel.salePrice = this.numberConverterPipe.transform(
      this.datageneratormodel.salePrice
    );
    this.datageneratormodel.totalExpense =
      this.datageneratormodel.brandPrice +
      this.datageneratormodel.travelExpense;
    console.log(this.datageneratormodel);
  }
}
