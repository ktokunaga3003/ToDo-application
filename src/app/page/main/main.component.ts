import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface ToDoList {
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

  addAreaForm: FormGroup;
  lists: ToDoList[] = [];

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

  addList(): void {
    const title = 'title';
    const detail = 'detail';
    const month = 'month';
    const day = 'day';
    const titleValue: string = this.addAreaForm.controls[title].value;
    const detailValue: string = this.addAreaForm.controls[detail].value;
    const monthValue: string = this.addAreaForm.controls[month].value.toString() + '月';
    const dayValue: string = this.addAreaForm.controls[day].value.toString() + '日';

    const list: ToDoList = {title: titleValue, detail: detailValue, date: monthValue + dayValue};

    if (!list.title) {
      return;
    }

    this.lists.push(list);
    this.addAreaForm.reset();
  }

}
