import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms-demo',
  templateUrl: './template-forms-demo.component.html',
  styleUrls: ['./template-forms-demo.component.css']
})
export class TemplateFormsDemoComponent implements OnInit, AfterViewInit {

  @ViewChild('laptopForm') laptopForm!: NgForm;

  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ]

  get time() {
    return Date.now();
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.laptopForm.value);
  }

  onSubmit(): void {
    console.log(this.laptopForm.value); 
  }

}
