import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // zmienna globalna dla komponentu
  title = 'projekt1';
  inputText = 'Nowa nazwa ';
  zmienKolor = 'color-black';

  isDisabled = true;
  logo = '';
  htmlContent = '';

  ngOnInit(): void { }

  zmienUstawienia() {
  this.inputText = 'tekst zmieniony';
  this.zmienKolor = 'color-brown';
  this.isDisabled = false;
  this.logo = 'https://angular.io/assets/images/logos/angular/logonav@2x.png';
  this.htmlContent = 'Mateusz Mróz';
  }

  getClass(){
    return this.zmienKolor;
  }
 }

