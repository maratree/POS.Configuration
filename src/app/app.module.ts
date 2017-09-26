import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { LoginComponent } from './login/login.component';
import { MasterPmainComponent } from './master-pmain/master-pmain.component';

import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsergroupListComponent } from './usergroup-list/usergroup-list.component';
import { UsergroupComponent } from './usergroup/usergroup.component';
import { PageMainComponent } from './page-main/page-main.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { WorkstationListComponent } from './workstation-list/workstation-list.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { OutletListComponent } from './outlet-list/outlet-list.component';
import { OutletComponent } from './outlet/outlet.component';
import { ShiftGroupComponent } from './shift-group/shift-group.component';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { DiscountComponent } from './discount/discount.component';
import { ShiftComponent } from './shift/shift.component';
import { ShiftListComponent } from './shift-list/shift-list.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    LoginComponent,
    MasterPmainComponent,
    ProductListComponent,
    ProductComponent,
    UserListComponent,
    UserComponent,
    UsergroupListComponent,
    UsergroupComponent,
    PageMainComponent,
    CompanyListComponent,
    CompanyComponent,
    WorkstationListComponent,
    WorkstationComponent,
    OutletListComponent,
    OutletComponent,
    ShiftGroupComponent,
    DiscountListComponent,
    DiscountComponent,
    ShiftComponent,
    ShiftListComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
