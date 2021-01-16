import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GridserviceService} from 'src/app/services/gridService/gridservice.service';

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
  constructor(public dialog: MatDialog,private elementRef:ElementRef,private gridservice:GridserviceService) {
   
   }

 


  ngOnInit(): void {
    this.grid=this.gridservice.isgrid;
    console.log(this.grid)
    console.log("------------------")
   /* this.gridservice.currentGridValue.subscribe(grid=>this.grid=grid)
    console.log(this.grid)*/
    
  }

  openDialog(card:any):void{
   /* console.log(card)*/
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
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

}
