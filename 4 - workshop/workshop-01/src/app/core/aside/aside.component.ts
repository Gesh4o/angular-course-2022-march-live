import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  posts: IPost[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getRecentPosts$().subscribe(posts => this.posts = posts);
  }

}
