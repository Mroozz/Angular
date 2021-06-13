import { Samochod } from './samochod';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { markAsUntransferable } from 'worker_threads';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.css']
})
export class SamochodyComponent implements OnInit {

  @Input() samochodyItems: object = [];

 @Output() minusSamochod: EventEmitter<number> = new EventEmitter<number>();

 @Output() addSamochod: EventEmitter<object> = new EventEmitter<object>();

 marka: string;
 model: string;
 rok: number;

 ngOnInit() { }

 usunSamochod(index: number) {
    this.minusSamochod.emit(index);
 }

 dodajSamochod() {
    this.addSamochod.emit(new Samochod(this.marka, this.model, this.rok));


}
}
