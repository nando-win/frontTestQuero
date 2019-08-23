import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBolsaPage } from './add-bolsa.page';

describe('AddBolsaPage', () => {
  let component: AddBolsaPage;
  let fixture: ComponentFixture<AddBolsaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBolsaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBolsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
