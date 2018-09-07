import { TestBed, inject } from '@angular/core/testing';

import { ViewInvoiceService } from '@app/invoice/view-invoice/view-invoice.service';

describe('ViewInvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewInvoiceService]
    });
  });

  it('should be created', inject([ViewInvoiceService], (service: ViewInvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
