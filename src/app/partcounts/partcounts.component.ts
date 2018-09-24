import { SumBuilder } from '../models/sumbuilder';
import { Component, OnInit, Input } from '@angular/core';
import { PartCount } from '../models/partcount';

@Component({
  selector: 'app-partcounts',
  templateUrl: './partcounts.component.html',
  styleUrls: ['./partcounts.component.scss']
})

export class PartcountsComponent implements OnInit {

  @Input() sumBuilder: SumBuilder;

  constructor() { }

  ngOnInit() {

  }

  calcFeedStock(): void {

    this.sumBuilder.calcFeedStock();

   }

   reset(partCount: PartCount) {
     partCount.reset();
     this.calcFeedStock();
   }

}
