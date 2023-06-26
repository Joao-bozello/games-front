import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchReadPage } from './match-read.page';

describe('MatchReadPage', () => {
  let component: MatchReadPage;
  let fixture: ComponentFixture<MatchReadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchReadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
