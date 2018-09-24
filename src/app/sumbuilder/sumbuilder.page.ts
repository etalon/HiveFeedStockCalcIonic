import { Component, OnInit } from '@angular/core';
import { SumBuilder } from '../models/sumbuilder';

@Component({
  selector: 'app-sumbuilder',
  templateUrl: './sumbuilder.page.html',
  styleUrls: ['./sumbuilder.page.scss'],
})

export class SumbuilderPage  implements OnInit {

  sumBuilder = new SumBuilder;

  constructor() { }

  ngOnInit() {
  }

  calcFeedStock(): void {

    this.sumBuilder.calcFeedStock();

  }

  showPartCount(): void {

    alert('to be done');

  }

  getColor(): String {
    switch (true) {
      case (this.sumBuilder.weightFeedStock > 17):
        return 'success';
        break;
      case (this.sumBuilder.weightFeedStock > 15):
        return 'warning';
        break;
      default:
        return 'danger';
        break;
    }

  }
}
