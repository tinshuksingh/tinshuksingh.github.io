import { Injectable } from '@angular/core';
import { InvoiceModule } from '@app/invoice/invoice.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewInvoiceModel } from '@app/invoice/view-invoice/view-invoice.model';

@Injectable()
export class ViewInvoiceService {
  invoiceUrl: string = './assets/mock-data/invoices-mock-data.json';

  constructor(private httpClient: HttpClient) { }

  getInvoices(): Observable<any>  {
    // let url = "./assets/mock-data/invoices-mock-data.json";
    // let _header = new HttpHeaders().set('content-type', 'application/json');
    // return this.httpClient.get<Observable<ViewInvoiceModel>>(url, { headers: _header });

    return this.httpClient.get<Observable<ViewInvoiceModel>>(this.invoiceUrl);
  }
}
