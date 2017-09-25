import { Injectable } from '@angular/core';

@Injectable()
export class CountService {

  constructor() {

  }

  public count = 0;
  public lastoperation = 'None';

  get() {
    return this.count;
  }

  getlastoperation() {
    return this.lastoperation;
  }

  increment() {
    this.count++;
    this.lastoperation = 'increment';

  }

  decrement() {
    this.count--;
    this.lastoperation = 'decrement';

  }

}