import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { GridserviceService} from 'src/app/services/gridService/gridservice.service';

@Component({
  selector: 'app-sidenave',
  templateUrl: './sidenave.component.html',
  styleUrls: ['./sidenave.component.css']
})
export class SidenaveComponent implements OnInit {

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;
  isGrid:boolean=false;
  constructor(private gridservice:GridserviceService) { 

   
   

  }

  ngOnInit(): void {
  }

  gridFunction(){
    if(this.isGrid==false){
      this.gridservice.isgrid=true;
      this.isGrid=true;
    }else{
      this.isGrid=false;
      this.gridservice.isgrid=false;
    }
   /* this.isGrid=true;
    console.log(this.isGrid)*/
    
   /* this.gridservice.changegridvalue(true)*/
  }
 

 

}



