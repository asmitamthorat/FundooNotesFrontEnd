
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title;
  description;
  id;
  color='';
  card:any;
  constructor(private noteService:NoteService, public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) 
    { 
      this.card=data;
      console.log(this.card);
      console.log("note data in update", data);
      this.title = data.note.title,
      this.description = data.note.description
      this.id=data.note.id
      this.color=data.note.color
      console.log(this.id)


  }


  getcolor(isColor:string){
    console.log(isColor);
    this.color=isColor;
    let data = {
      color: isColor,
      noteIdList: [this.id]
    }
    this.noteService.changeColorOfNote(data).subscribe((response:any) => {
      console.log(" color changed successfully", response);
      

    })
    

  }

  

  ngOnInit(): void {
  }


  updateNote(data1:any){
    console.log(data1)
    let data = {
      noteId: this.id,
      // title: card.card.title,
      title: this.title,
      description: this.description,
      
    }

    this.noteService.updateNote(data).subscribe((response:any) => {
      console.log(" updated successfull", response);
      

    })
  }

}
