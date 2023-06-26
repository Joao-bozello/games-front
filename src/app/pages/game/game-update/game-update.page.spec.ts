import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameUpdatePage } from './game-update.page';

describe('GameUpdatePage', () => {
  let component: GameUpdatePage;
  let fixture: ComponentFixture<GameUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
