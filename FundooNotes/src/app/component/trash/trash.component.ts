import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GridserviceService} from 'src/app/services/gridService/gridservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trashNote:any=[];
  notes:any=[];
  note =[];

  isFocused:boolean=false;
  myDiv;
  index123=-1;
  grid:boolean=false;
  AllNotes=[];
  constructor(private noteSerice:NoteService) {
    this.trashNote=this.noteSerice.getTrashNotes().subscribe((response:any)=>{
      /*  console.log(response);*/
        this.trashNote=response['data'].data
        this.notes=this.trashNote.filter((note:any)=>{
        
            return note.isDeleted==true
          })
          console.log(this.notes);
      })
   }

   ngOnInit(): void {
    
  
  
}



fun(){
  this.index123=-1;
}


check(number){
/*  console.log(number);*/
 this.index123=number
/* console.log( document.getElementById('number'));*/
 

  
}

}
