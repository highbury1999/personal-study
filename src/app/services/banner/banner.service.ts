import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class BannerService {

  constructor(private http:HttpClient) { }
  showmineUrl:string = 'https://api.showmine.com.au/';

  getBanner():Observable<Object> {
    let options = { };
    return this.http.get<Object>(this.showmineUrl + 'banner');
  }


}
