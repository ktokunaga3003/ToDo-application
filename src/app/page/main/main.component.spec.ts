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
    const title = 'title';
    const detail = 'detail';
    const month = 'month';
    const day = 'day';
    const titleControl = component.addAreaForm.controls[title];
    const detailControl = component.addAreaForm.controls[detail];
    const monthControl = component.addAreaForm.controls[month];
    const dayControl = component.addAreaForm.controls[day];

    // titleが未入力の場合
    detailControl.setValue('test');
    monthControl.setValue(1);
    dayControl.setValue(1);
    component.addList();
    expect(component.lists.length).toEqual(0);
    expect(detailControl.value).toBeTruthy();
    expect(monthControl.value).toBeTruthy();
    expect(dayControl.value).toBeTruthy();

    // titleに「testTitle」という値を追加した場合
    titleControl.setValue('testValue');
    component.addList();
    expect(component.lists.length).toEqual(1);
    expect(titleControl.value).toBeFalsy();
    expect(detailControl.value).toBeFalsy();
    expect(monthControl.value).toBeFalsy();
    expect(dayControl.value).toBeFalsy();
  });
});
