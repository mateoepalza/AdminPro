import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  unsubscribe: Subscription

  constructor() {
    // First element
    //this.observableInit();
    // Second element
    //this.observableRetry();
    // Third element
    //this.returningObservable();
    // fourth element
    this.usingInterval()
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  // this method is the first explanation about observables
  observableInit() {
    // create the observable, keep in mind that if no one is subscribed the observable will not execute
    const obs$ = new Observable(observer => {
      let i = 0;
      const intervalo = setInterval(() => {
        i++;

        observer.next(i);

        if (i == 4) {
          // we clear the interval
          clearInterval(intervalo);
          // we end the observer
          observer.complete();
        }
        console.log(i);
        if (i == 2) {
          // we emit the error
          observer.error("i llego al valor 2");
        }
      }, 1000);
    });


    // we subscribe to the observable
    obs$.subscribe(valor => {
      // works fine
      console.log("subs", valor);
    }, err => {
      // error
      console.error(err);
    }, () => {
      // complete 
      console.log("observable terminado");
    });
  }

  // this method explains how the retry element works
  observableRetry() {
    // create the observable, keep in mind that if no one is subscribed the observable will not execute

    let i = 0;

    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i == 4) {
          // we clear the interval
          clearInterval(intervalo);
          // we end the observer
          observer.complete();
        }

        if (i == 2) {
          i = 0;
          // we emit the error
          observer.error("i llego al valor 2");
        }

      }, 1000);
    });


    // we subscribe to the observable
    obs$.pipe(
      retry(1)
    ).subscribe(valor => {
      // works fine
      console.log("subs", valor);
    }, err => {
      // error
      console.error(err);
    }, () => {
      // complete 
      console.log("observable terminado");
    });
  }

  returningObservable(){
    this.retornaObservable().pipe(
      retry(1)
    ).subscribe( valor =>{
      console.log(valor);
    }, err =>{
      console.log(err);
    }, () =>{
      console.log("Observable ha terminado");
    })
  }

  retornaObservable(): Observable<number> {
    let i = 0;

    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i == 4) {
          // we clear the interval
          clearInterval(intervalo);
          // we end the observer
          observer.complete();
        }

        if (i == 2) {
          // we emit the error
          observer.error("i llego al valor 2");
        }

      }, 1000);
    });

    return obs$
  }


  usingInterval(){
    this.unsubscribe = this.retornaIntervalo().subscribe( console.log )
  }

  retornaIntervalo(): Observable<number>{

    return interval(100).pipe(
      map( data => {
        return (data + 1);
      }),
      filter( (valor) =>{
        if (valor % 2 == 0){
          // si es par lo emite
          return true;
        }else{
          // si es impar no lo emite
          return false;
        }
      }),
      // cuantas emisiones del observable necesito
      take(10),
    );
  }
}
