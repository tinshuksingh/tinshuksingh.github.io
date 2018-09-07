import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { InvoiceTableItem } from '@app/invoice/view-invoice/components/view-invoice-container.component';
import { ApproveInvoiceModel } from '@app/invoice/approve-invoice/approve-invoice.model';
import { ApproveInvoiceService } from '@app/invoice/approve-invoice/approve-invoice.service';

@Component({
  selector: 'cr-approve-invoice',
  templateUrl: './approve-invoice-container.component.html',
  styleUrls: ['./approve-invoice-container.component.scss']
})

export class ApproveInvoiceContainerComponent implements OnInit {

  
  errorMessage: string;
  displayedColumns: string[] = ['Request Number', 'Requester Name', 'Requester Team Name', 'Request Date'];
  invoices: ApproveInvoiceModel[];
  invoiceDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private approveInvoiceService: ApproveInvoiceService) { }

  ngOnInit() {
    this.getApproveInvoiceList();
  }

  getApproveInvoiceList() {
    this.approveInvoiceService.getInvoices().subscribe((response) => {
      this.invoices = response.invoices;
      this.invoiceDataSource = new MatTableDataSource<ApproveInvoiceModel>(this.invoices);
      this.invoiceDataSource.paginator = this.paginator;
      this.invoiceDataSource.sort = this.sort;
    },
      (error) => {
        this.errorMessage = "Error in approve-invoice-service, Please try later."
      });
  }

  applyFilter(filterValue: string) {
    this.invoiceDataSource.filter = filterValue.trim().toLowerCase();
  }
  
}