import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterNoI18NSampleApplicationSharedModule } from 'app/shared/shared.module';
import { BankAccountComponent } from './bank-account.component';
import { BankAccountDetailComponent } from './bank-account-detail.component';
import { BankAccountUpdateComponent } from './bank-account-update.component';
import { BankAccountDeleteDialogComponent } from './bank-account-delete-dialog.component';
import { bankAccountRoute } from './bank-account.route';

@NgModule({
  imports: [JhipsterNoI18NSampleApplicationSharedModule, RouterModule.forChild(bankAccountRoute)],
  declarations: [BankAccountComponent, BankAccountDetailComponent, BankAccountUpdateComponent, BankAccountDeleteDialogComponent],
  entryComponents: [BankAccountDeleteDialogComponent],
})
export class JhipsterNoI18NSampleApplicationBankAccountModule {}
