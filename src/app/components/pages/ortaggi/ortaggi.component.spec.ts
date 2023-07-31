import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtaggiComponent } from './ortaggi.component';

describe('OrtaggiComponent', () => {
  let component: OrtaggiComponent;
  let fixture: ComponentFixture<OrtaggiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrtaggiComponent]
    });
    fixture = TestBed.createComponent(OrtaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
