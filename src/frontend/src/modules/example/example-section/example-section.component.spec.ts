import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSectionComponent } from './example-section.component';

describe('ExampleSectionComponent', () => {
  let component: ExampleSectionComponent;
  let fixture: ComponentFixture<ExampleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
