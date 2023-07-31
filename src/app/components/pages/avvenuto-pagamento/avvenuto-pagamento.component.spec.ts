import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvvenutoPagamentoComponent } from './avvenuto-pagamento.component';

describe('AvvenutoPagamentoComponent', () => {
  let component: AvvenutoPagamentoComponent;
  let fixture: ComponentFixture<AvvenutoPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvvenutoPagamentoComponent]
    });
    fixture = TestBed.createComponent(AvvenutoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
