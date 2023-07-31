import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPagamentoComponent } from './pagina-pagamento.component';

describe('PaginaPagamentoComponent', () => {
  let component: PaginaPagamentoComponent;
  let fixture: ComponentFixture<PaginaPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPagamentoComponent]
    });
    fixture = TestBed.createComponent(PaginaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
