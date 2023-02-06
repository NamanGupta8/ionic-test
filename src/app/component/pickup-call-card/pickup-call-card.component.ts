import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  date: Date = new Date();
  @Input() hasHeader: boolean | null = null;
  @Input() hasFooter: boolean | null = null;

  @Input() status: string = '';
  @Input() updateAt!: Date;
  @Input() createdAt!: Date;
  @Input() notes: string = '';
  @Input() value: string = '';

  constructor() {}

  ngOnInit() {}
}
