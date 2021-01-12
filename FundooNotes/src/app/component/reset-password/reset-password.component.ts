import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder)
   {

   }

  ngOnInit(): void {
   this.myForm=this.fb.group({
      email: ['',[
        Validators.required
      ]],
      password: ['',[
        Validators.required
      ]],
      confirm: ['',[
        Validators.required
      ]],
    })
  }

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }

  get confirm(){
    return this.myForm.get('password');
  }
 

}
