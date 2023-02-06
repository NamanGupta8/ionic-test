import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
})
export class PickupCallsPage implements OnInit {
  date: Date = new Date();
  constructor() {}

  ngOnInit() {}
}
