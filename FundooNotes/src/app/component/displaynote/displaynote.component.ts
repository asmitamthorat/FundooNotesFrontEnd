import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GridserviceService} from 'src/app/services/gridService/gridservice.service';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.css']
})
export class DisplaynoteComponent implements OnInit {
  @Input() AllNotes:any;
  isFocused:boolean=false;
  myDiv;
  index123=-1;
  grid:boolean=false;
  card:any;
  constructor(private noteService:NoteService,public dialog: MatDialog,private elementRef:ElementRef,private gridservice:GridserviceService) {
    this.grid=this.gridservice.isgrid;
    console.log(this.grid)
   }

  ngOnInit(): void {
    this.grid=this.gridservice.isgrid;
    console.log(this.grid)
    console.log("------------------")
    console.log(this.AllNotes)
   /* this.gridservice.currentGridValue.subscribe(grid=>this.grid=grid)
    console.log(this.grid)*/
  }

  openDialog(card:any):void{
   /* console.log(card);
    let a=card.reminder[0];
    console.log(a);*/
      this.card=card;
    const dialogRef = this.dialog.open(UpdateComponent, {
     
      data: {note: card}
    })
  }

  pinNote(card){
  }

  pin(){   
  }

  fun(){
    this.index123=-1;
  }


  check(number){
  /*  console.log(number);*/
   this.index123=number
  /* console.log( document.getElementById('number'));*/
  }

  getcolor(isColor){
    console.log(isColor);
   /* this.color=isColor;*/
    let data = {
      color: isColor,
      noteIdList: [this.card.id]
    }
    this.noteService.changeColorOfNote(data).subscribe((response:any) => {
      console.log(" color changed successfully", response);
    })
  }

  getCard(card:any){
    this.card=card;
  }


}
