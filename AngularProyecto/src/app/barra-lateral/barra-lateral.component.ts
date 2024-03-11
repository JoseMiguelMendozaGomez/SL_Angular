import { Component,Input } from '@angular/core';

@Component({
  selector: 'barra_lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent {
  @Input() welcomeText: string ='';
  @Input() registerText: string ='';
  @Input() registerLinkText : string ='';
  @Input() mensajeSidebar1 : string ='';
  @Input() mensajeSidebar2 : string ='';
  

  constructor(){}
}
