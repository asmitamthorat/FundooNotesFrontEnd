import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.css']
})
export class TakeNoteComponent implements OnInit {
  isFocused: boolean = false;
  private router: Router
  constructor() {
   
   }

  ngOnInit(): void {
  }


  onclick() {  
   alert("alert")
} 

}
