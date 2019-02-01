import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from '../../models/Item';

@Injectable()
export class ItemService {

  constructor(private http:HttpClient) { }
  showmineUrl:string = 'http://localhost:8888/api/item/';

  getItem():Observable<Object> {
    return this.http.get<Object>(this.showmineUrl + '8d5ac419f35ca18b2ca463ba2dd11faf');
  }

}
