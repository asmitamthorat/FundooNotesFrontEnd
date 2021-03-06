import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private noteservice:NoteService) { }

  note=[];
  notes=[];
  ngOnInit(): void {
    this.getAllNotes();
   
    this.noteservice.getRefreshedData().subscribe(() => this.getAllNotes());
    console.log(this.notes)
    
  }


  getAllNotes(){
    this.noteservice.getnote().subscribe((response:any)=>{
      console.log(response);
      this.note=response['data'].data
      this.notes=this.note.filter((note:any)=>{
       
          return note.isDeleted==false
        }).filter((note) => !note.isArchived)
        console.log("filter array");
    })
    console.log("printing the note")
    console.log(this.note);
  }
}
