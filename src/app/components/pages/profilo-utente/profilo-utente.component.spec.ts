import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloUtenteComponent } from './profilo-utente.component';

describe('ProfiloUtenteComponent', () => {
  let component: ProfiloUtenteComponent;
  let fixture: ComponentFixture<ProfiloUtenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfiloUtenteComponent]
    });
    fixture = TestBed.createComponent(ProfiloUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
