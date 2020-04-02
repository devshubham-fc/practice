import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxformComponent } from './uxform.component';

describe('UxformComponent', () => {
  let component: UxformComponent;
  let fixture: ComponentFixture<UxformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
