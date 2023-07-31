import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiAlCarrelloComponent } from './aggiungi-al-carrello.component';

describe('AggiungiAlCarrelloComponent', () => {
  let component: AggiungiAlCarrelloComponent;
  let fixture: ComponentFixture<AggiungiAlCarrelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiAlCarrelloComponent]
    });
    fixture = TestBed.createComponent(AggiungiAlCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
