import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note/note.service';


@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,
              private noteService:NoteService  ) { }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
      title: ['',[
        Validators.required
      ]],
      description: ['',[
        Validators.required
      ]],
    })
  }

  get title(){
    return this.myForm.get('title');
  }
  get description(){
    return this.myForm.get('description');
  }


  submitNote():void{
    let data = { 
    title:this.title.value,
    description:this.description.value,
    isPined:false,
    color: '#FFFFFF',
    isArchived: false,
    labelIdList: [],
    reminder: 'Mon Jan 11 2021 20:00:00 GMT+0530 (India Standard Time)', 
    collaberators: []
    };
    console.log(data)
    this.noteService.addNote(data).subscribe(( response )=> {
      console.log(response)
    } );
    } ;

  

}
