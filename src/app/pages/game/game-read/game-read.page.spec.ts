import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameReadPage } from './game-read.page';

describe('GameReadPage', () => {
  let component: GameReadPage;
  let fixture: ComponentFixture<GameReadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameReadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
