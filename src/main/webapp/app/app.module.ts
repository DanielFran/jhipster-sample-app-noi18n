import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { JhipsterNoI18NSampleApplicationSharedModule } from 'app/shared';
import { JhipsterNoI18NSampleApplicationCoreModule } from 'app/core';
import { JhipsterNoI18NSampleApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterNoI18NSampleApplicationHomeModule } from './home/home.module';
import { JhipsterNoI18NSampleApplicationAccountModule } from './account/account.module';
import { JhipsterNoI18NSampleApplicationEntityModule } from './entities/entity.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { StateStorageService } from 'app/core/auth/state-storage.service';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, ProfileService, PageRibbonComponent, ErrorComponent } from './layouts';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterNoI18NSampleApplicationAppRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
    JhipsterNoI18NSampleApplicationSharedModule,
    JhipsterNoI18NSampleApplicationCoreModule,
    JhipsterNoI18NSampleApplicationHomeModule,
    JhipsterNoI18NSampleApplicationAccountModule,
    JhipsterNoI18NSampleApplicationEntityModule
    // jhipster-needle-angular-add-module JHipster will add new module here
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  providers: [
    ProfileService,
    PaginationConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [StateStorageService, Injector]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
      deps: [JhiEventManager]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
      deps: [Injector]
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class JhipsterNoI18NSampleApplicationAppModule {}
