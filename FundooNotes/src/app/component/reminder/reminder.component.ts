import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  myForm:FormGroup;
  @Input() card:any;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  @Output() reminderEvent = new EventEmitter<string>();

  date;
  minDate=new Date()


  

  submit(){
   
    this.reminderEvent.emit(this.date);
    console.log(this.date)
    console.log("reminder");
    let data={
     reminder: this.date, noteIdList: [this.card.id]
    }
    this.noteService.updateReminderList(data).subscribe((response)=>{
      console.log(response);
    })

  }

  updateReminder(){
    console.log("reminder");
   let data={
    reminder: this.date, noteIdList: [this.card.note.id]
   }
   this.noteService.updateReminderList(data).subscribe((response)=>{
     console.log(response);
   })

  }





}
