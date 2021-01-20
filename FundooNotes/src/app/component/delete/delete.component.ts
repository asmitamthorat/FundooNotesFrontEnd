import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  labelForm: FormGroup;
  data:any=[];
  isFound: boolean = true;
  note;
  constructor(private noteService:NoteService,private builder: FormBuilder) {
          
   }
  @Input() noteId:any;
  ngOnInit(): void {
    this.labelForm = this.builder.group({
      label: [''],
    });
  }
  getNoteLabelList(){
    this.noteService.getNoteLabelList().subscribe((data:any)=>{
      
      this.note=data.data.details;
      console.log(data.data.details);
    });
        /* console.log(this.labels);*/
         /* console.log(this.labels.details);*/
  }
 
  deleteNote(){
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isDeleted: true
    }
    this.noteService.deleteNotes(data).subscribe((response:any)=>{
      console.log(" deleted successfully ");
    });
  }

  get label() {
    return this.labelForm.get('label').value;
  }

 
/*

  
*/
  

  addLabelToNote(labelItem){
    console.log(labelItem);
    console.log(this.noteId);
    console.log(labelItem.id);

    
  /*  noteId=this.noteId;
    data=labelItem.label[0];
    labelId=labelItem.id[0];*/
    this.noteService.addLabelToNote({},this.noteId,labelItem.id).subscribe((response:any)=>{
      console.log(response);
    });
  }

}
