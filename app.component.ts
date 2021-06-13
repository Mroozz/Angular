import { Samochod } from './samochody/samochod';
import { Component, OnInit, NgModule } from '@angular/core';
import { clear } from 'console';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  s1 = new Samochod('Audi', 'RS6', 2011);
  s2 = new Samochod('Alfa', 'Gulia', 2019);
  s3 = new Samochod('Porshe', '911', 2015);
  s4 = new Samochod('Fiat', 'Panda', 2012);
  s5 = new Samochod('BMW', 'E91', 2008);



  samochody: object[];
    isCreated = false;
      ngOnInit(): void {
     this.samochody = [this.s1, this.s2, this.s3, this.s4, this.s5];
      }

  onAddSamochod(samochod: object) {
    if (this.samochody.includes(samochod)) {
      this.isCreated = true;
      } else {
      this.isCreated = false;
      this.samochody.push(samochod);
    }
  }
  onMinusSamochod(index: number) {
      this.isCreated = false;
      this.samochody.splice(index, 1);
    }
 }


