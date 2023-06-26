import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchAddPage } from './match-add.page';

describe('MatchAddPage', () => {
  let component: MatchAddPage;
  let fixture: ComponentFixture<MatchAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
