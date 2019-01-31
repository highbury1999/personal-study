import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {

  constructor() { }

  getItem() {
    return 'this is item from service';
  }

}
