import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


  archieveClick(){
    console.log("hit");
    this._router.navigate(['/home/archieve'])
  }


  trashClick(){
    this._router.navigate(['/home/trashNotes'])
  }


  homeButtonClick(){
    this._router.navigate(['/home'])
  }
  

}



