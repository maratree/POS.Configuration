import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { LoginComponent } from './login/login.component';
import { MasterPmainComponent } from './master-pmain/master-pmain.component';
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
const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [{
      path: '', component: LoginComponent
    }]
  },
  {
    path: 'Pmain',
    component: PageMainComponent,
    children: [{
      path: 'product-list', component: ProductListComponent
    }, {
      path: 'product', component: ProductComponent
    }, {
      path: 'user-list', component: UserListComponent
    }, {
      path: 'user', component: UserComponent
    }, {
      path: 'usergroup-list', component: UsergroupListComponent
    }, {
      path: 'usergroup', component: UsergroupComponent
    }, {
      path: 'company-list', component: CompanyListComponent
    }, {
      path: 'company', component: CompanyComponent
    }, {
      path: 'workstation-list', component: WorkstationListComponent
    }, {
      path: 'workstation', component: WorkstationComponent
    }, {
      path: 'outlet-list', component: OutletListComponent
    }, {
      path: 'outlet', component: OutletComponent
    }, {
      path: 'shift-group', component: ShiftGroupComponent
    }, {
      path: 'discount-list', component: DiscountListComponent
    }, {
      path: 'discount', component: DiscountComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
