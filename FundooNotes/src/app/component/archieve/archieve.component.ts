import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
  noteId;
  isArchived:boolean=false;
  constructor(private noteService:NoteService) { }

  @Input() card:any;
  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<boolean>();
/*
  addNewItem(isArchived: boolean) {
    this.newItemEvent.emit(isArchived);
  }*/

  Archieve(){
    this.noteId=this.card.id;
    console.log(this.card);
    console.log(this.card.note.id);
    this.isArchived=true;
    this.newItemEvent.emit(this.isArchived)
    console.log(this.isArchived)
    let data={
      isArchived: true, noteIdList: [this.card.note.id]

    }
    this.noteService.archieveNote(data).subscribe((response)=>{
      console.log(response)
    })

  }



}
