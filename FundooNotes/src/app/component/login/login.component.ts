import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/login/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,
    private userService:LoginserviceService   ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
    email: ['',[
      Validators.required
    ]],
    password: ['',[
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


  submitUser():void{
    let data = { 
    cartId: " ",
    email:this.email.value,
    password:this.password.value,
   
    };
    
    
    console.log(data);
    this.userService.login(data).subscribe(
      (response) => {
        localStorage.setItem('token', response.id);
        localStorage.setItem('data', JSON.stringify(response));
       
    } );
    
  }

}
