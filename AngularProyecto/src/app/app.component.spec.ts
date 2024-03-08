import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  
  it(`Valida que los multiplos de 3 digan Fizz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Retofizz(3)).toEqual('fiz');
    expect(app.Retofizz(6)).toEqual('fiz');
    expect(app.Retofizz(9)).toEqual('fiz');
  });

  it(`Valida que los multiplos de 5 digan Fizz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Retofizz(5)).toEqual('buz');
    expect(app.Retofizz(10)).toEqual('buz');
   
  });
  it(`Valida que sea multiplo de los dos`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Retofizz(15)).toEqual('fizbus');
  });

  it(`Valida que si no son multiplos de ninguno devuelva el mismo numero`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Retofizz(1)).toEqual(1);
    expect(app.Retofizz(2)).toEqual(2);
    expect(app.Retofizz(7)).toEqual(7);
  });

  it(`Valida que si ingresa un numero mayor de 100 devuelva el mensaje Numero invalido`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Retofizz(101)).toEqual('Numero invalido');
  });

  it(`Valida que si ingresa un numero menor de 1 devuelva error`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Retofizz(-1)).toEqual('Numero n');
  });

 
});
