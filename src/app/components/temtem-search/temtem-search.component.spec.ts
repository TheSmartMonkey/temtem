import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemSearchComponent } from './temtem-search.component';

describe('TemtemSearchComponent', () => {
  let component: TemtemSearchComponent;
  let fixture: ComponentFixture<TemtemSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemtemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
