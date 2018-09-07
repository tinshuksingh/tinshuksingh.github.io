import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoiceContainerComponent } from '@app/invoice/view-invoice/components/view-invoice-container.component';

describe('ViewInvoiceContainerComponent', () => {
  let component: ViewInvoiceContainerComponent;
  let fixture: ComponentFixture<ViewInvoiceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInvoiceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvoiceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
