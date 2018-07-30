import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { PaceProgressComponent } from './pace-progress/pace-progress.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { AppRoutingModule } from './/app-routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormPageComponent } from './reactive-form-page/reactive-form-page.component';
import { ReactiveDetailPageComponent } from './reactive-detail-page/reactive-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlankPageComponent,
    PaceProgressComponent,
    SidebarComponent,
    InnerHeaderComponent,
    TestPageComponent,
    PageLoginComponent,
    RegistrationPageComponent,
    UserDetailComponent,
    ReactiveFormPageComponent,
    ReactiveDetailPageComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
