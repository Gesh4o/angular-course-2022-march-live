import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.css']
})
export class CustomerListItemComponent implements OnInit {
  date = new Date();

  limit = 15;

  @Input() item!: IUser;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // console.log('Special customer');
      this.item.email = 'this-is-special-customer@abv.bg';

      // this.item = {
      //   ...this.item,
      //   email: 'this-is-special-customer@abv.bg'
      // };
    }, 2000)
  }

  handleExpand(): void {
    this.limit = Infinity;
  }

  shorten(value: string, limit: number = 10): string {
    // console.log('CustomerListItemComponent#shorten', value);
    if (value.length > limit) {
      return `${value.substring(0, limit - 3)}...`;
    }

    return value;
  }

}
