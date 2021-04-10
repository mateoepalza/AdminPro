import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 10;
  @Input() className: string = 'btn-primary';

  @Output() porcentajeEmitter: EventEmitter<number>  = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
    this.className = `btn ${this.className}`;
  }

  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {

    this.progreso = this.progreso + valor;

    /**
     * Checkea de que no puedan haber valores mayores a 100
     */
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
    }
    // chequea de que no pueda haber valores menores a 0
    if (this.progreso <= 0 && valor <= 0) {
      this.progreso = 0;
    }

    // emitir valor
    this.porcentajeEmitter.emit(this.progreso);

  }
  
  onChangeIncrement(nuevoValor: number){

    if(nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
    
    this.porcentajeEmitter.emit(this.progreso);
  }
}
