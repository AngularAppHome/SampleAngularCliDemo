import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { RightslideComponent } from './rightslide/rightslide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsideComponent,
    RightslideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
