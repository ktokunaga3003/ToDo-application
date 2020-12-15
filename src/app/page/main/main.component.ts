import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  addAreaControl : FormControl;
  lists: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.addAreaControl = this.formBuilder.control('');
  }

  addList(list: string) {
    if (!list) return;
    this.lists.push(list);
    this.addAreaControl.reset();
  }

}
