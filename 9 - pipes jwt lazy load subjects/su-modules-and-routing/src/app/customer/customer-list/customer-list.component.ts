import { Component, OnInit } from '@angular/core';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: IUser[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getUsers$().subscribe(users => {
      this.customers = users;
    })
  }
}
