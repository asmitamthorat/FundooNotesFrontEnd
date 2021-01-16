import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  myForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() reminderEvent = new EventEmitter<string>();

  date;
  minDate=new Date()


  

  submit(){
   
    this.reminderEvent.emit(this.date);
    console.log(this.date)

  }




}
