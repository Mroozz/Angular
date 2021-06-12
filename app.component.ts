import { Component, OnInit, NgModule } from '@angular/core';
import { clear } from 'console';
import { Button } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imie = '';
  nazwisko = '';
  wiek = 18;
  list = [];

  listaUczniow(){
    this.list.push(this.imie);
    this.list.push(this.nazwisko);
    this.list.push(this.wiek);
  }
clear(){
  this.imie = '';
  this.nazwisko = '';
  this.wiek = 18;

}
}
