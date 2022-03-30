import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private activeUsers!: Promise<number>;

  constructor(private titleService: Title) { }

  async ngOnInit(): Promise<void> {
    this.titleService.setTitle('Home Page');

    // const xhr = new XMLHttpRequest();
    // xhr.addEventListener('load', function () {
    //   const xhr1 = new XMLHttpRequest();
    //   xhr1.addEventListener('load', function () {
    //     const xhr3 = new XMLHttpRequest();
    //     xhr3.addEventListener('load', function () {
    //     });
    //   });
    // });

    // const r1 = await new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.addEventListener('load', function () {
    //     resolve(this.responseText);
    //   })
    // });

    // const r2 = await new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.addEventListener('load', function () {
    //     resolve(this.responseText);
    //   })
    // })
    // const r3 = await new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.addEventListener('load', function () {
    //     resolve(this.responseText);
    //   })
    // })

    this.activeUsers = new Promise<number>((resolve) => {
      // setInterval(() => {
        setTimeout(() => {
          const activeUsers = Math.round(Math.random() * 100);

          console.log('resolve', activeUsers);
          resolve(activeUsers);
        }, 2000)
      // }, 4000);
    });

    this.activeUsers
      .then(activeUsers => {
        console.log('activeUsers', activeUsers);
      });
  }
}
