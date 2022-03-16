import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, tap } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  id: number = 0;

  customer!: IUser;
  isLoading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap(params => {
          this.id = +params['id'];

          this.titleService.setTitle('Profile ' + this.id);
          this.isLoading = true;
        }),
        switchMap(params => {
          return this.customerService.getUserById$(params['id'])
        })
      )
      .subscribe({
        next: user => {
          this.customer = user;
          this.isLoading = false;
        },
        error: error => {
          this.isLoading = false;
          console.error('error happened', error);
        }
      })
  }

}
