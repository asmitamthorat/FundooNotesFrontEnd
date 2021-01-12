import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../http-services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor( private http:HttpClient) { }

  addNote(data:any): Observable<any> {
    console.log("Data in addnote",data)
    return this.http.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', data);
  }


}
