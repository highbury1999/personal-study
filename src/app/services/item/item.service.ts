import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

  constructor(private http:HttpClient) { }
  showmineUrl:string = 'http://localhost:8888/api/item/';
 

  getItem():Observable<Object> {
    let options = { params: new HttpParams()
      .set('name', 'NAME')
      .set('address',"Austarlia") };
    return this.http.get<Object>(this.showmineUrl + '8d5ac419f35ca18b2ca463ba2dd11faf', options);
  }
    
}
