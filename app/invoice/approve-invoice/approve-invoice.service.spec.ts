import { TestBed, inject } from '@angular/core/testing';
import { ApproveInvoiceService } from '@app/invoice/approve-invoice/approve-invoice.service';

describe('ApproveInvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApproveInvoiceService]
    });
  });

  it('should be created', inject([ApproveInvoiceService], (service: ApproveInvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
