import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactMeComponent implements OnInit {
  title = 'Contact';

  constructor() { }

  ngOnInit(): void {
  }

}
