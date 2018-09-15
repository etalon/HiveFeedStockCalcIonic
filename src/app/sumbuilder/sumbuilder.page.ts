import { Component, OnInit } from '@angular/core';
import { SumBuilder } from '../models/sumbuilder';

@Component({
  selector: 'app-sumbuilder',
  templateUrl: './sumbuilder.page.html',
  styleUrls: ['./sumbuilder.page.scss'],
})
export class SumbuilderPage implements OnInit {

  calcFeedStock(): void {

    this.sumBuilder.calcFeedStock();

  }

  showPartCount(): void {

    alert("to be done");

  }

  sumBuilder = new SumBuilder;

  constructor() { }

  ngOnInit() {
  }

}