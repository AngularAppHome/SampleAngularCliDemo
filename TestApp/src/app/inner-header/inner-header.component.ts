import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.css']
})
export class InnerHeaderComponent implements OnInit {
  @Input() title
  constructor() { }

  ngOnInit() {
  }

}
