import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://arcane-refuge-65794.herokuapp.com/employee';
  userUrl: string = 'https://arcane-refuge-65794.herokuapp.com/users';

  getUsers() {
    return this.http.get(this.baseUrl);
  }
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  getRegUsers() {
    return this.http.get(this.userUrl);
  }
  createRegUser(user: RUser) {
    return this.http.post(this.userUrl, user);
  }
  deleteRegUser(id: RUser) {
    return this.http.delete(this.userUrl + '/' + id);
  }
}

export interface User{
  //id:string,
  name:string,
  mobile:string
}

export interface RUser{
  //id:string,
  firstName:string,
  lastName:string,
  email:string,
  password:string
}
