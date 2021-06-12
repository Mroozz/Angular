import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.css']
})
export class SamochodyComponent implements OnInit {

  @Input () title: string;
  @Input () samochodyItems: object = [];
  constructor() { }

  ngOnInit(): void {
  }

}
