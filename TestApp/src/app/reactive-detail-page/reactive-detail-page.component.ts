import { Component, OnInit } from '@angular/core';
import {UserService,RUser} from "../user.service";

@Component({
  selector: 'app-reactive-detail-page',
  providers:[UserService],
  templateUrl: './reactive-detail-page.component.html',
  styleUrls: ['./reactive-detail-page.component.css']
})
export class ReactiveDetailPageComponent implements OnInit {
 title='Reactive Details  (User)'
  constructor(private userService: UserService) { }

  users: RUser[];
  ngOnInit() {
    this.userService.getRegUsers()
      .subscribe( data => {
        this.users = data["result"];
      });
  }
  ishidden = true
  ShowHidePass(){
    this.ishidden= !this.ishidden
  }
}
