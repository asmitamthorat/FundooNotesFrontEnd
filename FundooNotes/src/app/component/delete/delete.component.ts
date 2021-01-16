import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private noteService:NoteService) {
   
   }
  @Input() noteId:any;
  ngOnInit(): void {
  }

 
  deleteNote(){
    console.log(this.noteId);
    
    let data = {
    
      noteIdList: [this.noteId],
      isDeleted: true
    }


    this.noteService.deleteNotes(data).subscribe((response:any)=>{
      console.log(" deleted successfull ");
     
      
    });
  }

}
