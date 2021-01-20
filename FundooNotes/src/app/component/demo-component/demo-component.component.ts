import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NoteService } from 'src/app/services/note/note.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {
  
  myForm:FormGroup;
  listOfCollaborators:[];
  
  constructor(private _service:NoteService, private _builder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this._builder.group({
      collaboratorEmail:['']
     })
   
  }

  get collaboratorEmail(){
    return this.myForm.get('collaboratorEmail').value;
  }
  
  

   getCollaboraterList(email){
    let data={searchWord: email}
     this._service.getCollaboratorList(data).subscribe((response)=>{
       this.listOfCollaborators=response['data'];
       console.log(this.getCollaboraterList);
     })
   }
 
}
