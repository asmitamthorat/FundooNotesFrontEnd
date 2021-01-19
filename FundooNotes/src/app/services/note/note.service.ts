import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../http-services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _refresh$ = new Subject<void>();

  constructor( private http:HttpClient) { }

  addNote(data:any): Observable<any> {
    console.log("Data in addnote",data)
    return this.http.post(environment.backendUri + 'notes/addNotes', data).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
  }

  getnote():Observable<any>{
    return this.http.get(environment.backendUri + 'notes/getNotesList');
  }

  getRefreshedData() {
    return this._refresh$;
  }

  updateNote(data:any){
    return this.http.post(environment.backendUri + 'notes/updateNotes',data).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
   }


   changeColorOfNote(data:any){
        return this.http.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",data).pipe(
          tap(()=>{
            this._refresh$.next();
          })
        );
   }


   deleteNotes(data:any){
    return this.http.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",data).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
   }

   getNoteLabelList():Observable<any>{
     
     return this.http.get("http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/getNoteLabelList");
   }  

   getTrashNotes():Observable<any>{
        return this.http.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList");
   }


   setProfileImage(data:any){
     return this.http.post("http://fundoonotes.incubation.bridgelabz.com/api/user/uploadProfileImage",data);
   }


   addLabelToNoteUri(noteId, labelId): string{
    return `${environment.backendUri}notes/${noteId}/addLabelToNotes/${labelId}/add`; 
  }

  addLabelToNote(data, noteId, labelId){
    console.log("in service")
    console.log(this.addLabelToNoteUri(noteId, labelId));
    return this.http.post(data, this.addLabelToNoteUri(noteId, labelId)).pipe(
      tap(()=>{
        
        this._refresh$.next();
      })
    );
  }


}
