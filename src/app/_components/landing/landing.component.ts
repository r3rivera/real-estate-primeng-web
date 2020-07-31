import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r3app-landing',
  template: `
  <r3app-hero></r3app-hero>
  `
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
