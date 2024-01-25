import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdetailComponent } from './mdetail.component';

describe('MdetailComponent', () => {
  let component: MdetailComponent;
  let fixture: ComponentFixture<MdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdetailComponent]
    });
    fixture = TestBed.createComponent(MdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
