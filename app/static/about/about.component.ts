import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'cr-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  
  constructor() {}

  ngOnInit() {}
}
