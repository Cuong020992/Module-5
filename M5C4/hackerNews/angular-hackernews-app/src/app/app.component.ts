import {Component, OnInit} from '@angular/core';
import {Article} from "./article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-hackernews-app';


  constructor() {
  }

  ngOnInit() {
  }
}
