import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTableComponent } from './temtem-table.component';

describe('TemtemTableComponent', () => {
  let component: TemtemTableComponent;
  let fixture: ComponentFixture<TemtemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemtemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
