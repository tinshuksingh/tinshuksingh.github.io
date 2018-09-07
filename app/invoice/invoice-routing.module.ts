import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceComponent } from '@app/invoice/invoice.component';
import { ViewInvoiceContainerComponent } from '@app/invoice/view-invoice/components/view-invoice-container.component';
import { AddInvoiceContainerComponent } from '@app/invoice/add-invoice/components/add-invoice-container.component';
import { ApproveInvoiceContainerComponent } from '@app/invoice/approve-invoice/components/approve-invoice-container.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    children: [
      {
        path: '',
        redirectTo: 'pending-approvals',
        pathMatch: 'full'
      },
      {
        path: 'pending-approvals',
        component: ViewInvoiceContainerComponent,
        data: { title: 'cr.invoice.menu.pending-approvals' }
      },
      {
        path: 'view-invoice',
        component: ViewInvoiceContainerComponent,
        data: { title: 'cr.invoice.menu.view-invoice' }
      },
      {
        path: 'add-invoice',
        component: AddInvoiceContainerComponent,
        data: { title: 'cr.invoice.menu.add-invoice' }
      },
      {
        path: 'approve-invoice',
        component: ApproveInvoiceContainerComponent,
        data: { title: 'cr.invoice.menu.approve-invoice' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
