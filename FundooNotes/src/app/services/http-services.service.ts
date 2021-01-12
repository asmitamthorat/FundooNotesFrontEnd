import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  /*registerUri: string = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";*/
  constructor( /*private http:HttpClient*/) { }

  /*
  postData()
  {
    let url="http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";

    this.http.post(url,{ data}).toPromise().then((data:any)=>{console.log(data)})
  }*/

/*

  register(data): Observable<any> {
    return this.http.post(data, this.registerUri);
  }

  */
}
