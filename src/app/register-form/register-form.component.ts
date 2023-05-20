import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{
  registerform! :FormGroup;
  constructor (private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerform=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      repassword:['',Validators.required],
      email:['',Validators.required]
    },{validators:this.checkPasswords})
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['repassword'].value;

    return pass === confirmPass ? null : { notSame: true }
  }
  OnRegister()
  {
    if (this.registerform.valid)
    { 
      console.log(this.registerform.value)
      //perform logic for sign up
      this.auth.register(this.registerform.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.registerform.reset();
          this.router.navigate(['/logform']);
        },
        error:(err)=>{
          alert(err.error.message)
        }
      })
      
    }
    else
    {
      //throw error using toaster
      console.log("form invalid");
      this.validateForm(this.registerform);
    }

  }
  


  private validateForm(fg :FormGroup)
  {
    Object.keys(fg.controls).forEach(field=>{
      const control=fg.get(field);
      if (control instanceof FormControl)
      {
        control.markAsDirty({onlySelf:true});
      } else if (control instanceof FormGroup)
      {
        this.validateForm(control);
      }
    })
  }

}
