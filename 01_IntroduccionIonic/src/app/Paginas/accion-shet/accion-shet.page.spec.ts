import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccionShetPage } from './accion-shet.page';

describe('AccionShetPage', () => {
  let component: AccionShetPage;
  let fixture: ComponentFixture<AccionShetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionShetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
