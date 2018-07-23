import { Component, OnInit } from '@angular/core';
import {UserService,User} from "../user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  providers:[UserService],
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title="User Detail Page"
  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data["result"];
      });
  }
  onDelete(id){
    // this.userService.deleteUser(id)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u.id !== user.id);
    //   })
  }


}
