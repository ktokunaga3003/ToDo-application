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

  it('setTodayで本日の日付が設定されているか', () => {
    const dateControl = component.addAreaForm.controls[component.dateStr];
    const today = new Date();
    const testYear = today.getFullYear();
    const testMonth = ('0' + (today.getMonth() + 1)).slice(-2);
    const testDay = ('0' + (today.getDate())).slice(-2);
    const todayValue = testYear + '-' + testMonth + '-' + testDay;

    // 期限の入力値に本日の日付を設定
    component.setToday(today);
    expect(todayValue).toEqual(dateControl.value);
  });

  it('addListでlistが追加されているかどうか', () => {
    const today = new Date();
    const titleControl = component.addAreaForm.controls[component.titleStr];
    const detailControl = component.addAreaForm.controls[component.detailStr];
    const dateControl = component.addAreaForm.controls[component.dateStr];

    // titleが未入力の場合
    detailControl.setValue('test');
    dateControl.setValue('2020-01-01');
    component.addList();
    expect(component.lists.length).toEqual(0);
    expect(detailControl.value).toBeTruthy();
    expect(dateControl.value).toBeTruthy();

    // titleに「testTitle」という値を追加した場合
    titleControl.setValue('testValue');
    component.addList();
    expect(component.lists.length).toEqual(1);
    expect(titleControl.value).toBeFalsy();
    expect(detailControl.value).toBeFalsy();
    expect(dateControl.value).toBeTruthy();
  });

  it('表示されるリストの日付が「yyyy年/mm月/dd日」となっているか', () => {
    const testDateValue = '2020年/01月/01日';
    const dateControl = component.addAreaForm.controls[component.dateStr];

    // 「2020-01-01」という入力が「2020年01月01日」と表示されるか
    dateControl.setValue('2020-01-01');
    expect(testDateValue).toEqual(component.showListDate(dateControl.value));
  });
});
