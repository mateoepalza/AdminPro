import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color, Colors } from 'ng2-charts';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  @Input() title: string = "Sin titulo";
  @Input() labels: Label[] = ['label 1', 'Label 2', 'Label 3'];
  @Input() data: MultiDataSet = [
    [15, 60, 30],
  ];
  @Input() colors: Colors[] = [
    { backgroundColor: ["#6857E6", '#009FEE', '#F02059'] }
  ];
  @Input() chartType: ChartType = 'doughnut';

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
