import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio';
  active = true;
  active2 = true;
  active3 = true;

  constructor() { }

  ngOnInit(): void {
  }

}
