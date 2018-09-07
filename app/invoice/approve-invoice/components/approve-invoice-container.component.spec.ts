import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveInvoiceContainerComponent } from '@app/invoice/approve-invoice/components/approve-invoice-container.component';

describe('ApproveInvoiceContainerComponent', () => {
  let component: ApproveInvoiceContainerComponent;
  let fixture: ComponentFixture<ApproveInvoiceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveInvoiceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveInvoiceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
