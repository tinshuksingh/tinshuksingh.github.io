import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApproveInvoiceModel } from '@app/invoice/approve-invoice/approve-invoice.model';


@Injectable()
export class ApproveInvoiceService {
  invoiceUrl: string = './assets/mock-data/pending-invoices-mock-data.json';

  constructor(private httpClient: HttpClient) { }

  getInvoices(): Observable<any>  {
    // let url = "./assets/mock-data/invoices-mock-data.json";
    // let _header = new HttpHeaders().set('content-type', 'application/json');
    // return this.httpClient.get<Observable<ViewInvoiceModel>>(url, { headers: _header });

    return this.httpClient.get<Observable<ApproveInvoiceModel>>(this.invoiceUrl);
  }
}
