import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaFruttivendoloComponent } from './ricerca-fruttivendolo.component';

describe('RicercaFruttivendoloComponent', () => {
  let component: RicercaFruttivendoloComponent;
  let fixture: ComponentFixture<RicercaFruttivendoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicercaFruttivendoloComponent]
    });
    fixture = TestBed.createComponent(RicercaFruttivendoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
