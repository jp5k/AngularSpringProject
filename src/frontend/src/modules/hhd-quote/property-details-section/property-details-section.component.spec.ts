import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailsSectionComponent } from './property-details-section.component';

describe('PropertyDetailsSectionComponent', () => {
  let component: PropertyDetailsSectionComponent;
  let fixture: ComponentFixture<PropertyDetailsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDetailsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
