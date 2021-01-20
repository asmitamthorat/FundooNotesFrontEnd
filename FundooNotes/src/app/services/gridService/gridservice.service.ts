import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridserviceService {
 public isgrid:boolean=false;

  /*private gridvalue=new BehaviorSubject<boolean>(false);
  currentGridValue=this.gridvalue.asObservable();
*/


  constructor() {
    console.log(this.isgrid)
   }

  /*changegridvalue(isgrid:boolean){
    this.gridvalue.next(isgrid)
    console.log(this.currentGridValue)
  }
*/
/*
  setGrid(isgrid: boolean){
    this.isgrid=isgrid
   console.log(this.isgrid)
  }*/
/*
  getGrid(){
    console.log(this.isgrid)
    return this.isgrid
  }
  */
}
