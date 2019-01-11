import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosSidebarComponent } from './gastos-sidebar.component';

describe('GastosSidebarComponent', () => {
  let component: GastosSidebarComponent;
  let fixture: ComponentFixture<GastosSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
