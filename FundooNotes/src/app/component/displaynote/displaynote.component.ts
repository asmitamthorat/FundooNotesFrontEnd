import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.css']
})
export class DisplaynoteComponent implements OnInit {
  @Input() AllNotes:any;
  constructor() { }

  ngOnInit(): void {
  }

  pinNote(card){

  }

  pin(){
    
  }

}
