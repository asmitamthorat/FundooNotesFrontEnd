import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/services/note/note.service';

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
  collaboratorEmail=new FormControl('');
 
  listOfCollaborators:[];
  
  
  constructor(@Inject(MAT_DIALOG_DATA) public card: any, private _builder: FormBuilder,private _service:NoteService) {
      this.note=this.card;
     
      this.data=JSON.parse(localStorage.getItem('data'));
     this.userEmail=this.data.email;
      this.userName=this.data.firstName+" "+ this.data.lastName
      
   }
  

  ngOnInit(): void {
    
  }

  submitUser(){
    
  }

  

   getCollaboraterList(email){
    let data={searchWord: email}
     this._service.getCollaboratorList(data).subscribe((response)=>{
       this.listOfCollaborators=response['data'];
       console.log(this.getCollaboraterList);
     })
   }

}
