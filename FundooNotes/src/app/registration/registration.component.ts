import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder  )
   { 

   }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      firstName: ['',[
        Validators.required
      ]],
      lastName: ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]+[\\.\\-\\+\\_]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]?[a-zA-Z]{2,4}[\\.]?([a-z]{2,4})?$")
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[A-Z])(?=[a-zA-Z0-9]*[^a-zA-Z0-9][a-zA-Z0-9]*$).{8,}")
      ]],

      confirm: ['',[
        Validators.required,
      ]],

    })
    
  }


  get firstName(){
    return this.myForm.get('firstName');
  }

  get lastName(){
    return this.myForm.get('lastName');
  }

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }


  get confirm(){
    return this.myForm.get('confirmPassword').value === this.myForm.get('password').value;
  }

  

}


