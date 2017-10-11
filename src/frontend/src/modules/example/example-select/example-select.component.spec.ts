import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSelectComponent } from './example-select.component';

describe('ExampleSelectComponent', () => {
  let component: ExampleSelectComponent;
  let fixture: ComponentFixture<ExampleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
