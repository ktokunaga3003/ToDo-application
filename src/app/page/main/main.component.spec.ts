import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;


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
    const title = component.addAreaForm.controls['title'];
    const detail = component.addAreaForm.controls['detail'];
    const month = component.addAreaForm.controls['month'];
    const day = component.addAreaForm.controls['day'];

    // titleが未入力の場合
    detail.setValue('test');
    month.setValue(1);
    day.setValue(1);
    component.addList();
    expect(component.lists.length).toEqual(0);
    expect(detail.value).toBeTruthy();
    expect(month.value).toBeTruthy();
    expect(day.value).toBeTruthy();

    // titleに「testTitle」という値を追加した場合
    title.setValue('testValue');
    component.addList();
    expect(component.lists.length).toEqual(1);
    expect(title.value).toBeFalsy();
    expect(detail.value).toBeFalsy();
    expect(month.value).toBeFalsy();
    expect(day.value).toBeFalsy();
  });
});
