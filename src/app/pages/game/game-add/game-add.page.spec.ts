import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameAddPage } from './game-add.page';

describe('GameAddPage', () => {
  let component: GameAddPage;
  let fixture: ComponentFixture<GameAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
