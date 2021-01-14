import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {
  isColor:string='';
  constructor() { }

  ngOnInit(): void {
  }

  @Output() ItemEvent = new EventEmitter<string>();
  open(trigger){
    trigger.openMenu();
  }

  getColor(color:string){
    console.log(color)
    this.isColor=color;
    this.ItemEvent.emit(this.isColor)
  }

}
