import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardformComponent } from './addcardform.component';

describe('AddcardformComponent', () => {
  let component: AddcardformComponent;
  let fixture: ComponentFixture<AddcardformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcardformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
