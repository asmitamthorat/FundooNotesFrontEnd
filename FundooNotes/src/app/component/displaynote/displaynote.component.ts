import { Component, Input, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.css']
})
export class DisplaynoteComponent implements OnInit {
  @Input() AllNotes:any;
  constructor(public dialog: MatDialog) { }

 


  ngOnInit(): void {
  }

  openDialog(card:any):void{
    console.log(card)
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      data: {note: card}
    })
  }


  pinNote(card){

  }

  pin(){
    
  }

}
