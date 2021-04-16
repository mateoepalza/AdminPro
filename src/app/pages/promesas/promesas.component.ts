import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // A basic promise
    // const promesas = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve("Hola mundo");
    //   }else{
    //     reject('algo salio mal');
    //   }
    // });

    // // Then when the promise resolves
    // // catch when it is rejected
    // promesas.then((elem) => {
    //   console.log(elem);
    // }).catch((elem) =>{
    //   console.log(elem);
    // })

    // console.log("Fin del init");
    // 



    // this.getUsuarios()

    // be aware that we are returning a promise and right away after we call the method
    // we subscribe to the promise
    this.getUsuarios().then( usuarios =>{
      console.log(usuarios);
    })
  }

  getUsuarios() {

    return new Promise(resolve => {
      // be aware that response.json() will return another promise, this will allows us to use then again
      // for the new promise
      fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then(body => resolve(body.data));
        // Be aware that we are resolving the data that we need
    });
    

  }

}
