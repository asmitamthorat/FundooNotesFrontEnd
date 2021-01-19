import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {
  data:any;
  image=null;
  constructor(private noteService:NoteService) {
    this.data=JSON.parse(localStorage.getItem('data'));
    console.log(this.data)
    
   console.log( this.data["email"]);

   console.log(this.data.email);
 
  }

  ngOnInit(): void {
  }

  
  getUploadImage(event){
      console.log(event);
      this.image=event.target.files[0];
  }

  upload(){
    this.noteService.setProfileImage(this.image).subscribe(( response )=> {
      console.log(response)
    
    } );
  }

  getImage(){
    var x = document.getElementById("myFile");
   console.log(x);
    this.noteService.setProfileImage(x).subscribe(( response )=> {
      console.log(response)
    
    } );
  }

  
}
