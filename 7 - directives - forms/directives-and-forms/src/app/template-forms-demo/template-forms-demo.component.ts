import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-forms-demo',
  templateUrl: './template-forms-demo.component.html',
  styleUrls: ['./template-forms-demo.component.css']
})
export class TemplateFormsDemoComponent implements OnInit, AfterViewInit {

  @ViewChild('laptopForm') laptopForm!: NgForm;
  @ViewChild('processor') processor!: NgModel;

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
    console.log(this.processor);
  }

  onSubmit(): void {
    console.log(this.laptopForm.value); 
  }

  clearForm(): void {
    // this.laptopForm.form.patchValue({
    //   'processor': '',
    //   'hardDisk': 0,
    //   'os': ''
    // });
    // this.laptopForm.form.markAsUntouched();

    this.laptopForm.reset();
  }

}
