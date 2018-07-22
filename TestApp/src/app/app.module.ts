import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PageLoginComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
