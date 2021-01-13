import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
  
  isArchived:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<boolean>();
/*
  addNewItem(isArchived: boolean) {
    this.newItemEvent.emit(isArchived);
  }*/

  Archieve(){
    this.isArchived=true;
    this.newItemEvent.emit(this.isArchived)
    console.log(this.isArchived)
  }



}
