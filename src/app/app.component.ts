import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<div class="title">My path is {{myPath}}</div>Data is {{myData | json}}`
})
export class AppComponent implements OnInit {
  myPath: string;
  myData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {this.myPath = url[0].path})
    this.route.data.subscribe((data) => {this.myData = data})
  }
}
