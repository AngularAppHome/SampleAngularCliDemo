import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.css']
})
export class BlankPageComponent implements OnInit {
  title="Blank Page"
  constructor() { }

  ngOnInit() {
  }

}
