import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBolsaComponent } from './add-bolsa.component';

describe('AddBolsaComponent', () => {
  let component: AddBolsaComponent;
  let fixture: ComponentFixture<AddBolsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBolsaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
