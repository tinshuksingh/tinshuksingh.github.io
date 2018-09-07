import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewInvoiceService } from '@app/invoice/view-invoice/view-invoice.service';
import { ViewInvoiceModel } from '@app/invoice/view-invoice/view-invoice.model';

@Component({
  selector: 'cr-view-invoice',
  templateUrl: './view-invoice-container.component.html',
  styleUrls: ['./view-invoice-container.component.scss']
})

export class ViewInvoiceContainerComponent implements OnInit {

  displayedColumns: string[] = ['Reqest Number', 'Ride ID', 'Ride Date', 'Shift', 'From', 'To', 'Fare', 'Status'];
  invoices: ViewInvoiceModel[];
  errorMessage: string;
  invoiceDataSource;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private viewInvoiceService: ViewInvoiceService) {

  }

  ngOnInit() {
    this.getInvoiceList();
  }

  getInvoiceList() {
    this.viewInvoiceService.getInvoices().subscribe((response) => {
      this.invoices = response.invoices;
      this.invoiceDataSource = new MatTableDataSource<InvoiceTableItem>(this.invoices);
      this.invoiceDataSource.paginator = this.paginator;
      this.invoiceDataSource.sort = this.sort;
    },
      (error) => {
        this.errorMessage = "Error in view-invoice-service, Please try later."
      });
  }

  applyFilter(filterValue: string) {
    this.invoiceDataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface InvoiceTableItem {
  id: number;
  crnNumber: string;
  rideDate: string;
  shift: string;
  rideFrom: string;
  rideTo: string;
  fare: number;
  invoiceStatus: string;
}

const ELEMENT_DATA: InvoiceTableItem[] = [
  { id: 1, crnNumber: 'CRN0001', rideDate: '2018-07-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 123, invoiceStatus: 'Approved' },
  { id: 2, crnNumber: 'CRN0002', rideDate: '2018-07-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 65, invoiceStatus: 'Rejected' },
  { id: 3, crnNumber: 'CRN0003', rideDate: '2018-08-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 55, invoiceStatus: 'Pending' },
  { id: 4, crnNumber: 'CRN0004', rideDate: '2018-08-07', shift: '2nd', rideFrom: 'BT', rideTo: 'HOME', fare: 99, invoiceStatus: 'Approved' },
  { id: 5, crnNumber: 'CRN0005', rideDate: '2018-08-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 53, invoiceStatus: 'Approved' },
  { id: 6, crnNumber: 'CRN0006', rideDate: '2018-10-05', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 145, invoiceStatus: 'Approved' },
  { id: 7, crnNumber: 'CRN0007', rideDate: '2018-10-06', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 88, invoiceStatus: 'Approved' },
  { id: 8, crnNumber: 'CRN0008', rideDate: '2018-07-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 75, invoiceStatus: 'Canceled' },
  { id: 9, crnNumber: 'CRN0009', rideDate: '2018-07-07', shift: 'General', rideFrom: 'HOME', rideTo: 'BT', fare: 65, invoiceStatus: 'Approved' },
  { id: 10, crnNumber: 'CRN0010', rideDate: '2018-07-07', shift: '1st', rideFrom: 'BT', rideTo: 'Indore', fare: 900, invoiceStatus: 'Approved' },
  { id: 11, crnNumber: 'CRN0011', rideDate: '2018-07-07', shift: '1st', rideFrom: 'Indore', rideTo: 'BT', fare: 100, invoiceStatus: 'Approved' },
  { id: 12, crnNumber: 'CRN0012', rideDate: '2018-07-07', shift: 'General', rideFrom: 'BT', rideTo: 'HOME', fare: 65, invoiceStatus: 'Approved' },
  { id: 13, crnNumber: 'CRN0013', rideDate: '2018-07-07', shift: '1st', rideFrom: 'HOME', rideTo: 'BT', fare: 65, invoiceStatus: 'Approved' },
  { id: 14, crnNumber: 'CRN0014', rideDate: '2018-07-07', shift: '1st', rideFrom: 'HOME', rideTo: 'BT', fare: 77, invoiceStatus: 'Approved' },
  { id: 15, crnNumber: 'CRN0015', rideDate: '2018-07-07', shift: '1st', rideFrom: 'HOME', rideTo: 'BT', fare: 65, invoiceStatus: 'Approved' },
  { id: 16, crnNumber: 'CRN0016', rideDate: '2018-07-07', shift: 'General', rideFrom: 'HOME', rideTo: 'BT', fare: 99, invoiceStatus: 'Approved' },
  { id: 17, crnNumber: 'CRN0017', rideDate: '2018-07-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 65, invoiceStatus: 'Approved' },
  { id: 18, crnNumber: 'CRN0018', rideDate: '2018-07-07', shift: 'General', rideFrom: 'HOME', rideTo: 'BT', fare: 105, invoiceStatus: 'Approved' },
  { id: 19, crnNumber: 'CRN0019', rideDate: '2018-07-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 136, invoiceStatus: 'Approved' },
  { id: 20, crnNumber: 'CRN0020', rideDate: '2018-07-07', shift: '1st', rideFrom: 'BT', rideTo: 'HOME', fare: 178, invoiceStatus: 'Approved' },
];