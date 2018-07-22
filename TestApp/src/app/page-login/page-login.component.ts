import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  isLogged=false
  user:string
  constructor(private router: Router) { 
    this.user = localStorage.getItem('currentUser');
    if(this.user=='' || this.user==null){
      this.isLogged=false
    }
    else{
      this.isLogged=true
    }
    if(this.isLogged){
      this.router.navigate(['/blank']);
    }
  }

  ngOnInit() {
  }

  onSignIn(username:string) {
    localStorage.setItem('currentUser',username);
  }

}
