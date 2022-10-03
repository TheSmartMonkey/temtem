import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTypesComponent } from './temtem-types.component';

describe('TemtemTypesComponent', () => {
  let component: TemtemTypesComponent;
  let fixture: ComponentFixture<TemtemTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemtemTypesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemtemTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
