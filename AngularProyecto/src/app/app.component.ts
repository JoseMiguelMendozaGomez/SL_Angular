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
     sonAnagramas(palabra1: string, palabra2: string): boolean {
      // Si las palabras tienen diferente longitud, no pueden ser anagramas
      if (palabra1.length !== palabra2.length) {
          return false;
      }
  
      // Convertimos las palabras a arrays de caracteres y las ordenamos
      const chars1 = palabra1.split('').sort();
      const chars2 = palabra2.split('').sort();
  
      // Comparamos los arrays de caracteres
      for (let i = 0; i < chars1.length; i++) {
          if (chars1[i] !== chars2[i]) {
              // Si encontramos al menos una letra diferente, no son anagramas
              return false;
          }
      }
  
      // Si no encontramos ninguna diferencia, son anagramas
      return true;
  }








  }



