import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerAddPage } from './player-add.page';

describe('PlayerAddPage', () => {
  let component: PlayerAddPage;
  let fixture: ComponentFixture<PlayerAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayerAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
