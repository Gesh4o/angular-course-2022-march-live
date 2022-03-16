import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.css']
})
export class CustomerListItemComponent implements OnInit {

  @Input() item!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
