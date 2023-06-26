import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchUpdatePage } from './match-update.page';

describe('MatchUpdatePage', () => {
  let component: MatchUpdatePage;
  let fixture: ComponentFixture<MatchUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
