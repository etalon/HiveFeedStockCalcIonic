import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumbuilderPage } from './sumbuilder.page';

describe('SumbuilderPage', () => {
  let component: SumbuilderPage;
  let fixture: ComponentFixture<SumbuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumbuilderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumbuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
