import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../http-services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  
 
  constructor(private http:HttpClient) { }


  register(data:any): Observable<any> {
    console.log("Data in userservice",data)
    return this.http.post<void>('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data
    
    );   
  }

  login(data:any): Observable<any> {
    console.log("Data in userservice",data)
    return this.http.post<void>('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data
    
    );

  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
