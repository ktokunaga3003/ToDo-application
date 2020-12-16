import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface toDoList {
  title: string;
  detail?: string;
  date?: string;
}

@Component({
  selector: 'todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  addAreaForm : FormGroup;
  lists: toDoList[] = [];

  constructor(
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.addAreaForm = this.formBuilder.group({
      title: [''],
      detail: [''],
      month: [''],
      day: [''],
    });
  }

  addList() {
    const title: string = this.addAreaForm.controls['title'].value;
    const detail: string = this.addAreaForm.controls['detail'].value
    const month: string = this.addAreaForm.controls['month'].value.toString() + '月';
    const day: string = this.addAreaForm.controls['day'].value.toString() + '日';

    const list: toDoList = {title: title, detail: detail, date: month+day};

    if (!list.title) return;

    this.lists.push(list);
    this.addAreaForm.reset();
  }

}
