import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutMeComponent implements OnInit {
  title = 'About';

  constructor() { }

  ngOnInit(): void {
  }

}
