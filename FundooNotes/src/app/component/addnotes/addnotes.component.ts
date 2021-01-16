import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note/note.service';

import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {
  myForm:FormGroup;
  reminder:string;
  flag:boolean=true;
  isColor:string='';
  isArchived:boolean=false;
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
  
  GetOutputVal( isArchived:boolean){
    console.log(isArchived);
    this.isArchived=isArchived;
  }

  getcolor(isColor:string){
    console.log(isColor);
    this.isColor=isColor;
  }

  getReminder(reminder:any){
    console.log(reminder);
    this.reminder=reminder;


  }

  submitNote():void{
    let data = { 
    title:this.title.value,
    description:this.description.value,
    isPined:false,
    color: this.isColor,
    isArchived: this.isArchived,
    labelIdList: [],
    reminder: this.reminder, 
    collaberators: []
    };
    console.log(data)
    this.noteService.addNote(data).subscribe(( response )=> {
      console.log(response)
    this.flag=true
    } );
    this.title.setValue('');
    this.description.setValue('');
    
    } ;

    onclick() {  
      if(this.flag===true){
        this.flag=false
      }
   }
   
   message: any = this.noteService.getnote()

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  

}
