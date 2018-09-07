import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil, map } from 'rxjs/operators';

import { routeAnimations, TitleService } from '@app/core';

@Component({
  selector: 'cr-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  animations: [routeAnimations]
})
export class InvoiceComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  invoiceNav = [
    { link: 'pending-approvals', label: 'cr.invoice.menu.pending-approvals' },
    { link: 'view-invoice', label: 'cr.invoice.menu.view-invoice' },
    { link: 'add-invoice', label: 'cr.invoice.menu.add-invoice' },
    { link: 'approve-invoice', label: 'cr.invoice.menu.approve-request' },
  ];

  constructor(
    private router: Router,
    private titleService: TitleService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToRouterEvents() {
    this.titleService.setTitle(
      this.router.routerState.snapshot.root,
      this.translate
    );
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        map((event: ActivationEnd) => event.snapshot),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(snapshot =>
        this.titleService.setTitle(snapshot, this.translate)
      );
  }
}
