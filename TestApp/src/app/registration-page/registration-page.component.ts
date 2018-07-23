import { Component, OnInit } from '@angular/core';
import {UserService,User} from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  title="Registraion Page"

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(name,mobile) {
    console.log("on submit")
    this.userService.createUser({name:name,mobile:mobile})
      .subscribe( data => {
        this.router.navigate(['userdetail']);
      });
      console.log("after submit")
  }
  onClickMe(){
    console.log("click me")
  }

}
