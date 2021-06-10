import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

title = 'Dni tygodnia';

dniTygodnia = [
  'poniedziałek',
  'wtorek',
  'środa',
  'czwartek',
  'piątek',
  'sobota',
  'niedziala'
  ];

  stanAplikacji = ['start', 'koniec'];

  osoba = new Osoba('Jan Nowak', 30, false);
  o1 = new Osoba('Jerzy Antryk', 18, false);
  o2 = new Osoba('Adam Krite', 61, false);
  o3 = new Osoba('Alicja Eradr', 20, true);


  spisLudnosci = [this.osoba, this.o1, this.o2, this.o3];

}


class Osoba{
    constructor(public imie: string, public wiek: number, public statusStudenta: boolean) {}
  }




