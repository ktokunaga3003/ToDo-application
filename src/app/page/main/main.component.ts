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
  titleStr = 'title';
  detailStr = 'detail';
  dateStr = 'date';
  addAreaForm: FormGroup;
  lists: ToDoList[] = [];
  today = new Date();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.addAreaForm = this.formBuilder.group({
      title: [''],
      detail: [''],
      date: [''],
    });
    this.setToday(this.today);
  }

  setToday(today: Date): void {
    const dateControl = this.addAreaForm.controls[this.dateStr];
    const year = (today.getFullYear());
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    dateControl.setValue(year + '-' + month + '-' + day);
  }

  addList(): void {
    const titleValue: string = this.addAreaForm.controls[this.titleStr].value;
    const detailValue: string = this.addAreaForm.controls[this.detailStr].value;
    const dateValue: string = this.addAreaForm.controls[this.dateStr].value;
    const list: ToDoList = {title: titleValue, detail: detailValue, date: dateValue};

    if (!list.title) {
      return;
    }

    this.lists.push(list);
    this.addAreaForm.reset();
    this.setToday(this.today);
  }

  showListDate(date: string): string {
    return date.slice(0, 4) + '年/' + date.slice(5, 7) + '月/' + date.slice(8) + '日';
  }

}
