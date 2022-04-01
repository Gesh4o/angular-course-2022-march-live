import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('editProfileForm') editProfileForm: NgForm;

  currentUser: IUser;

  isInEditMode: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: () => {
        this.router.navigate(['/login'])
      }
    })
  }

  enterEditMode(): void {
    this.isInEditMode = true;

    setTimeout(() => {
      this.editProfileForm.form.patchValue({
        email: this.currentUser.email,
        username: this.currentUser.username,
        'select-tel': this.currentUser.tel && this.currentUser.tel.length > 4
          ? this.currentUser.tel.substring(0, 4) : '',
        tel: this.currentUser.tel && this.currentUser.tel.length > 4
          ? this.currentUser.tel.substring(4) :
          this.currentUser.tel
      })
    });
  }

  updateProfile(): void {
    // TODO stoimenovg: continue.
    console.log(this.editProfileForm.value);

    this.isInEditMode = false;
  }

}
