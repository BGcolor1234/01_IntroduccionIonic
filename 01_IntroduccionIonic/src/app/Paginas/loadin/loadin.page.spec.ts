import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadinPage } from './loadin.page';

describe('LoadinPage', () => {
  let component: LoadinPage;
  let fixture: ComponentFixture<LoadinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
