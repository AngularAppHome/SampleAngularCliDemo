import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlankPageComponent }   from './blank-page/blank-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormPageComponent } from './reactive-form-page/reactive-form-page.component';
import { ReactiveDetailPageComponent } from './reactive-detail-page/reactive-detail-page.component';

const routes: Routes = [
  { path: 'blank', component: BlankPageComponent },
  { path: 'test', component: TestPageComponent },
  { path: 'login', component:PageLoginComponent},
  { path: 'register',component:RegistrationPageComponent},
  { path: 'userdetail',component:UserDetailComponent},
  { path: 'reactiveform',component:ReactiveFormPageComponent},
  { path: 'reactivedetail',component:ReactiveDetailPageComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
