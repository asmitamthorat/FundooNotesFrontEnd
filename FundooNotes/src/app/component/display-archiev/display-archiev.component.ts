
import { NoteService } from 'src/app/services/note/note.service';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GridserviceService} from 'src/app/services/gridService/gridservice.service';

@Component({
  selector: 'app-display-archiev',
  templateUrl: './display-archiev.component.html',
  styleUrls: ['./display-archiev.component.css']
})
export class DisplayArchievComponent implements OnInit {
  note =[];
  notes=[];
  isFocused:boolean=false;
  myDiv;
  index123=-1;
  grid:boolean=false;
  AllNotes=[];
  constructor(public dialog: MatDialog,private elementRef:ElementRef,private gridservice:GridserviceService,private noteservice:NoteService) {
      this.noteservice.getnote().subscribe((response:any)=>{
        console.log(response);
        this.note=response['data'].data
        this.notes=this.note.filter((note:any)=>{
        
            return note.isDeleted==false
          }).filter((note) => note.isArchived)
          console.log("filter array");
      })
      console.log("printing the note")
      console.log(this.note);
   
   }


 
  ngOnInit(): void {
      this.grid=this.gridservice.isgrid;
      console.log(this.grid)
      console.log("------------------")
    
    
  }

  openDialog(card:any):void{
   /* console.log(card)*/
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      data: {note: card}
    })
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
