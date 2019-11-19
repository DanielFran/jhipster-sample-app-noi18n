import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IBankAccount } from 'app/shared/model/bank-account.model';
import { BankAccountService } from './bank-account.service';
import { BankAccountDeleteDialogComponent } from './bank-account-delete-dialog.component';

@Component({
  selector: 'jhi-bank-account',
  templateUrl: './bank-account.component.html'
})
export class BankAccountComponent implements OnInit, OnDestroy {
  bankAccounts: IBankAccount[];
  eventSubscriber: Subscription;

  constructor(
    protected bankAccountService: BankAccountService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.bankAccountService.query().subscribe((res: HttpResponse<IBankAccount[]>) => {
      this.bankAccounts = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInBankAccounts();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IBankAccount) {
    return item.id;
  }

  registerChangeInBankAccounts() {
    this.eventSubscriber = this.eventManager.subscribe('bankAccountListModification', () => this.loadAll());
  }

  delete(bankAccount: IBankAccount) {
    const modalRef = this.modalService.open(BankAccountDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.bankAccount = bankAccount;
  }
}
