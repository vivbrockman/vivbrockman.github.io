import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar-overlay',
  templateUrl: './navbar-overlay.component.html',
  styleUrls: ['./navbar-overlay.component.scss']
})
export class NavbarOverlayComponent implements OnInit {
  @Input() active: boolean;
  @Output() activeChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleOverlay(): void {
    if (this.active === true) {
      this.active = false;
      this.activeChange.emit(false);
    } else {
      this.active = true;
      this.activeChange.emit(true);
    }
  }
}
