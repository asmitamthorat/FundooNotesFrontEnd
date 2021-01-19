import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-collaboratar-display',
  templateUrl: './collaboratar-display.component.html',
  styleUrls: ['./collaboratar-display.component.css']
})
export class CollaboratarDisplayComponent implements OnInit {
  email:string;
  note:any;
  a:any;
  data:any;
  userEmail:any;
  userName:any;
  constructor(@Inject(MAT_DIALOG_DATA) public card: any) {
    
    /*  console.log(this.card);
      for (  let a in this.card.card){
        console.log(a)
      }*/
      this.note=this.card;
     /* console.log(this.card['user']);*/
      console.log(this.card.card.title);
      this.data=JSON.parse(localStorage.getItem('data'));
      console.log(this.data)
      
     console.log( this.data["email"]);
  
     this.userEmail=this.data.email;
     console.log(this.userName=this.data.firstName+" "+ this.data.lastName)


   }
  

  ngOnInit(): void {
  }

  submitUser(){
    
  }

}
