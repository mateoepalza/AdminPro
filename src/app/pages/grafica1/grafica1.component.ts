import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {
  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: number[][] = [
    [350, 450, 100],
  ];
  public charType1: string = 'doughnut';
  public colors1: [{}] = [
    { backgroundColor: ["#6857E6", '#009FEE', '#F02059'] }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
