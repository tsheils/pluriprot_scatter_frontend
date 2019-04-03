import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterMenuComponent } from './scatter-menu.component';

describe('ScatterMenuComponent', () => {
  let component: ScatterMenuComponent;
  let fixture: ComponentFixture<ScatterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
