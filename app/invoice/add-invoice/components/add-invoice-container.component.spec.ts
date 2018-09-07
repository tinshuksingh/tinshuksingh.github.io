import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceContainerComponent } from '@app/invoice/add-invoice/components/add-invoice-container.component';

describe('AddInvoiceContainerComponent', () => {
  let component: AddInvoiceContainerComponent;
  let fixture: ComponentFixture<AddInvoiceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvoiceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
