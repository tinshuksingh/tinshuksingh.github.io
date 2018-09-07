import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { InvoiceRoutingModule } from '@app/invoice/invoice-routing.module';
import { InvoiceComponent } from '@app/invoice/invoice.component';
import { ViewInvoiceContainerComponent } from '@app/invoice/view-invoice/components/view-invoice-container.component';
import { AddInvoiceContainerComponent } from '@app/invoice/add-invoice/components/add-invoice-container.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatStepperModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog'
import { ViewInvoiceService } from '@app/invoice/view-invoice/view-invoice.service';
import { ApproveInvoiceContainerComponent } from '@app/invoice/approve-invoice/components/approve-invoice-container.component';
import { ApproveInvoiceService } from '@app/invoice/approve-invoice/approve-invoice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    InvoiceRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  declarations: [
    InvoiceComponent,
    AddInvoiceContainerComponent,
    ViewInvoiceContainerComponent,
    ApproveInvoiceContainerComponent
  ],
  providers: [ViewInvoiceService, ApproveInvoiceService]
})
export class InvoiceModule {
  constructor() { }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/invoice/`,
    '.json'
  );
}
