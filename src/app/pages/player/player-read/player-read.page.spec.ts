import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerReadPage } from './player-read.page';

describe('PlayerReadPage', () => {
  let component: PlayerReadPage;
  let fixture: ComponentFixture<PlayerReadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayerReadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
