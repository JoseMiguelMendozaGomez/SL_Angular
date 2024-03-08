import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProyecto';


     


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




  }



