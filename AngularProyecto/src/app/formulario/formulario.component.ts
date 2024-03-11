import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  @Input() welcomeText: string ='';
  @Input() registerText: string ='';
  @Input() registerLinkText : string ='';
  @Input() mensajeSidebar1 : string ='';
  @Input() mensajeSidebar2 : string ='';
}
