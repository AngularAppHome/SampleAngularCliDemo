import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://arcane-refuge-65794.herokuapp.com/employee';

  getUsers() {
    return this.http.get(this.baseUrl);
  }
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

export interface User{
  //id:string,
  name:string,
  mobile:string
}
