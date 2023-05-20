import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { AuthService } from 'src/app/Service/auth.service';
import { UsersStoreService } from 'src/app/Service/users-store.service';

@Component({
  selector: 'app-daskboard',
  templateUrl: './daskboard.component.html',
  styleUrls: ['./daskboard.component.css']
})
export class DaskboardComponent implements OnInit {
  public users:any=[];
  public name:string="";
  constructor(private api : ApiService, private auth : AuthService, private userstore:UsersStoreService){}
  ngOnInit()
  {
    this.api.getUser()
    .subscribe(res=>
      {
        this.users=res;
      });

    this.userstore.getNameFromstore()
    .subscribe(val=>
      {
        let nameFromtoken=this.auth.getnamefromtoken();
        this.name=val || nameFromtoken
      })
  }
  logout()
  {
    this.auth.logout();
  }

}
