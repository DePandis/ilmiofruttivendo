import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidaComponent } from './guida.component';

describe('GuidaComponent', () => {
  let component: GuidaComponent;
  let fixture: ComponentFixture<GuidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidaComponent]
    });
    fixture = TestBed.createComponent(GuidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
