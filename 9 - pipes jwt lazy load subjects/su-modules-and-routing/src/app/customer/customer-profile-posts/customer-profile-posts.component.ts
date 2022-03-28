import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, IPost } from '../customer.service';

@Component({
  selector: 'app-customer-profile-posts',
  templateUrl: './customer-profile-posts.component.html',
  styleUrls: ['./customer-profile-posts.component.css']
})
export class CustomerProfilePostsComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.parent!.snapshot.params['id'];
    this.customerService.getPostsByUserId$(id).subscribe(posts => {
      this.posts = posts;
    })

    // this.activatedRoute.data.subscribe((data) => {
    //   console.log('data',data);
    //   this.posts = data['posts'];
    // })
  }

}
