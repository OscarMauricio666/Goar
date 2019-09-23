import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsWebComponent } from './apps-web.component';

describe('AppsWebComponent', () => {
  let component: AppsWebComponent;
  let fixture: ComponentFixture<AppsWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
