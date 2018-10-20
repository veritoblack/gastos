import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosFooterComponent } from './gastos-footer.component';

describe('GastosFooterComponent', () => {
  let component: GastosFooterComponent;
  let fixture: ComponentFixture<GastosFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
