import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerUpdatePage } from './player-update.page';

describe('PlayerUpdatePage', () => {
  let component: PlayerUpdatePage;
  let fixture: ComponentFixture<PlayerUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayerUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
