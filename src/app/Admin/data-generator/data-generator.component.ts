import { Component, OnInit } from '@angular/core';
import { DataGenerator } from '../../Admin/models/data-generator.model';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent implements OnInit {
public datageneratormodel: DataGenerator;

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
}
