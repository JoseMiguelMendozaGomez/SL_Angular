import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProyecto';


     //Funcion reto #1 Fizzbuz
      Retofizz(n: number) {
      if (n % 3 == 0 && n % 5 == 0) {
        return "fizbus";
      } else if (n % 3 === 0) {
        return "fiz";
      } else if (n % 5 === 0) {
        return "buz";
      } else if (n>100){
        return "Numero invalido"; 
      } else if (n<1){
        return "Numero n"; 
      } else{
        return n;
      }
    }

    // Funcion reto #2 
     RetoAnagrama(palabra1: string, palabra2: string): boolean {
      palabra1 = palabra1.replace(/\s/g, "");
      palabra2 = palabra2.replace(/\s/g, "");

      if (palabra1.length !== palabra2.length) {
          return false;
      }
      if (palabra1 === palabra2) {
        return false;
      }
      let var1 = palabra1.split('').sort();
      let var2= palabra2.split('').sort();
      for (let i = 0; i < var1.length; i++) {
          if (var1[i] !== var2[i]) {
              return false;
          }
      }
      return true;

      }
       // Funcion Reto #3 Fibonacci 
      
       esPar(numero: number): boolean {
        return numero % 2 === 0;
       }

       esFibonacci(numero: number): boolean {
        if (numero === 0 || numero === 1) return true;
        let a = 0, b = 1;
        while (b < numero) {
          let temp = a;
          a = b;
          b = temp + b;
        }
        return b === numero;
      }

      esPrimo(numero: number): boolean {
        if (numero <= 1) return false;
        for (let i = 2; i * i <= numero; i++) {
          if (numero % i === 0) return false;
        }
        return true;
      }
      
      main(numero: number) {
        let mensaje = `${numero} es`;
        if (this.esPrimo(numero)){mensaje += " primo,"} else {mensaje += " no es primo"} ;
        if (this.esFibonacci(numero)){mensaje += " fibonacci"} else {mensaje += " no es fibonacci"};
        if (this.esPar(numero)){mensaje += " y es par"} else {mensaje += " y es impar"};
        return mensaje;
      }



  }








  



