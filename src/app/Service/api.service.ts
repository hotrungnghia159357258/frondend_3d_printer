import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL:string="https://localhost:7150/api/User/"
  constructor(private http:HttpClient) { }

  getUser()
  {
    return this.http.get<any>(this.baseURL);
  }
}
