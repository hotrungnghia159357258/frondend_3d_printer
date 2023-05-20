import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {
  private fullName$=new BehaviorSubject<string>("");
  private role$=new BehaviorSubject<string>("");

  constructor() { }
  public getRoleFromstore()
  {
    return this.role$.asObservable();
  }
  public setRoleFromstore(role:string)
  {
    this.role$.next(role);
  }
  public getNameFromstore()
  {
    return this.fullName$.asObservable();
  }
  public setNameFromstore(fullname:string)
  {
    this.fullName$.next(fullname);
  }
}
