import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {

  showSelected : boolean;
  showSelectedAbout:boolean;
  showSelectedLike:boolean;
  showSelectedAboutUs:boolean;
  showSelectedSupport:boolean;
  showSelectedBlog:boolean;
  showSelectedTools:boolean;

  constructor(){
      this.showSelected = false;     
  }
  ShowButton(){
      this.showSelected = true;
      this.showSelectedAbout = false;
      this.showSelectedAboutUs = false;
      this.showSelectedLike=false;
      this.showSelectedSupport=false;
      this.showSelectedBlog = false;
     this. showSelectedTools= false;
  }
  HideButton(){
    this.showSelected = false;
    this.showSelectedAbout = true;
    this.showSelectedAboutUs = false;
    this.showSelectedLike=false;
    this.showSelectedSupport=false;
    this.showSelectedBlog = false;
    this. showSelectedTools= false;
  }
  LikeButton(){
    this.showSelected = false;
    this.showSelectedAbout = false;
    this.showSelectedAboutUs = false;
    this.showSelectedLike=true;
    this.showSelectedSupport=false;
    this.showSelectedBlog = false;
    this. showSelectedTools= false;
    }
  SetButton(){
    this.showSelected = false;
    this.showSelectedAbout = false;
    this.showSelectedAboutUs = true;
    this.showSelectedLike=false;
    this.showSelectedSupport=false;
    this.showSelectedBlog = false;
    this. showSelectedTools= false;
    }
   supportButton(){
    this.showSelected = false;
    this.showSelectedAbout = false;
    this.showSelectedAboutUs =false;
    this.showSelectedLike=false;
    this.showSelectedSupport=true;
    this.showSelectedBlog = false;
    this. showSelectedTools= false;
    }

    BlogButton(){
      this.showSelected = false;
      this.showSelectedAbout = false;
      this.showSelectedAboutUs =false;
      this.showSelectedLike=false;
      this.showSelectedSupport=false;
      this.showSelectedBlog = true;
      this. showSelectedTools= false;
      }
      ToolsButton(){
        this.showSelected = false;
        this.showSelectedAbout = false;
        this.showSelectedAboutUs =false;
        this.showSelectedLike=false;
        this.showSelectedSupport=false;
        this.showSelectedBlog = false;
        this. showSelectedTools= true;
        }
  
  ngOnInit() {
  }

}
