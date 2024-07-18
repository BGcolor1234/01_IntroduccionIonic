import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonchipPage } from './ionchip.page';

describe('IonchipPage', () => {
  let component: IonchipPage;
  let fixture: ComponentFixture<IonchipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonchipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
