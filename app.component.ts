import { Samochod } from './samochod';
import { Component, OnInit, NgModule } from '@angular/core';
import { clear } from 'console';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];

title = 'Moje Samochody: ';
s1 = new Samochod('Audi', 'RS6', 2011);
s2 = new Samochod('Alfa', 'Gulia', 2018);
s3 = new Samochod('Porshe', '911', 2015);

  samochody = [this.s1, this.s2, this.s3 ];
}
