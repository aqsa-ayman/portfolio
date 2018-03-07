import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: false, showIndicators: true } }
  ]
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
