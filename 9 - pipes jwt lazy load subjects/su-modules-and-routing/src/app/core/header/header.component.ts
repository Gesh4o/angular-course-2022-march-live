import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  // @Output() themeChanged = new EventEmitter();

  @ViewChild('themeForm') themeForm!: NgForm;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeForm.setValue({
        theme: this.themeService.currentTheme
      });
    });

    this.themeForm.valueChanges?.subscribe(value => {
      if (value.theme) {
        console.log('theme changed', value);
        this.themeService.changeTheme(value.theme);
      }

      // this.themeChanged.emit(value.theme)
    })
  }

}
