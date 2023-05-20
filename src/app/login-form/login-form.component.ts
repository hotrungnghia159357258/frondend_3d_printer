import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  loginForm! :FormGroup;
  constructor (private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onLogin()
  {
    if (this.loginForm.valid)
    { 
      console.log(this.loginForm.value)
      //sent obj to db
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.loginForm.reset;
          this.auth.storeToken(res.token);
          this.router.navigate(['daskboard'])
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
      this.validateForm(this.loginForm);
      alert("log in fai!l");
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
