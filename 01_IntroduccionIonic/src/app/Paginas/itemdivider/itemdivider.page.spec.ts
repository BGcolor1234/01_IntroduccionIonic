import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemdividerPage } from './itemdivider.page';

describe('ItemdividerPage', () => {
  let component: ItemdividerPage;
  let fixture: ComponentFixture<ItemdividerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdividerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
