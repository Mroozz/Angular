import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenci-view',
  templateUrl: './studenci-view.component.html',
  styleUrls: ['./studenci-view.component.css']
})
export class StudenciViewComponent implements OnInit {

  @Input() studenciItems: string[] = [];

  constructor() { }
  ngOnInit() { }
 }

