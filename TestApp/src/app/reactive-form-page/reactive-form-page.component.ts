import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService,RUser} from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form-page',
  providers:[UserService],
  templateUrl: './reactive-form-page.component.html',
  styleUrls: ['./reactive-form-page.component.css']
})
export class ReactiveFormPageComponent implements OnInit {
 title ="User Registration Form"
  registerForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.userService.createRegUser(this.registerForm.value)
      .subscribe( data => {
        this.router.navigate(['reactivedetail']);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      });
    
}

}
