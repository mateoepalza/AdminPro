import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progressBar1: number = 50;
  progressBar2: number = 20;


  constructor() { }

  ngOnInit(): void {
  }
  
  get getPorcentaje1(){
    return `${this.progressBar1}%`;
  }
  
  get getPorcentaje2(){
    return `${this.progressBar2}%`;
  }
  
}
