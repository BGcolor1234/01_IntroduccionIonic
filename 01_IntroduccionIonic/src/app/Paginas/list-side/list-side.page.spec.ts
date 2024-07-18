import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSidePage } from './list-side.page';

describe('ListSidePage', () => {
  let component: ListSidePage;
  let fixture: ComponentFixture<ListSidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
