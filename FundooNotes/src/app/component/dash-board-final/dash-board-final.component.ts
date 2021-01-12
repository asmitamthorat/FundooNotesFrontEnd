
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dash-board-final',
  templateUrl: './dash-board-final.component.html',
  styleUrls: ['./dash-board-final.component.css']
})
export class DashBoardFinalComponent implements OnInit {
  isOpen:boolean;
  @Input() isSidebarClicked:boolean;
  @Output() route = new EventEmitter();
 sidebarHoverClass:string = "sidebar-hover";
  sidebarClass:string = "sidebar";
 

  constructor() { }

  ngOnInit(): void {
  }

  

}
