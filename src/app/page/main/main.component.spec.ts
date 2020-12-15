import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormBuilder } from '@angular/forms';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  const addAreaTestControl = new FormControl('');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [ FormBuilder ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addListでlistが追加されているかどうか', () => {
    let addValue = '';

    // 未入力の場合
    component.addList(addValue);
    expect(component.lists.length).toEqual(0);
    expect(component.addAreaControl.value).toBeFalsy();

    // 「testValue」という値を追加した場合
    addValue = 'testValue';
    component.addAreaControl.setValue('testValue');
    component.addList(addValue);
    expect(component.lists.length).toEqual(1);
    expect(component.addAreaControl.value).toBeFalsy();
  });
});
