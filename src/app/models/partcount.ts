import { Part } from './part';

export class PartCount {
    part: Part;
    count: number;

    constructor(part, count) {

      this.part = part;
      this.count = part.defaultCount;

    }

    reset() {
      this.count = 0;
    }
}
