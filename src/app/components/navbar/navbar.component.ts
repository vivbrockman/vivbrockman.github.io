import { Component, OnInit } from '@angular/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  smallScreen = true;
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOverlay(): void {
    if (this.active === true) {
      this.active = false;
    } else {
      this.active = true;
    }
  }

}
