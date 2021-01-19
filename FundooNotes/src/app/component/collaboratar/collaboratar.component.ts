import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CollaboratarDisplayComponent } from '../collaboratar-display/collaboratar-display.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-collaboratar',
  templateUrl: './collaboratar.component.html',
  styleUrls: ['./collaboratar.component.css']
})
export class CollaboratarComponent implements OnInit {
  @Input() card:any;
  constructor(public dialog: MatDialog) { 
   /* console.log(this.card)*/
  }
            
  ngOnInit(): void {
  }


  openCollaborator(){
   /* console.log(this.card)*/
    const dialogRef = this.dialog.open(CollaboratarDisplayComponent, {
      width: '600px',
      data: {card:this.card}
    })
  }

}
