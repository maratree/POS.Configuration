import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css']
})
export class PageMainComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }
  changLang() {
    this.currentLang = this.currentLang == "en" ? "th" : "en";
    this.tranService.use(this.currentLang);
  }
  changLangEN() {
    // this.currentLang = this.currentLang == "en" ? "th" : "en";
    this.currentLang = "en";
    this.tranService.use(this.currentLang);
  }
  changLangTH() {
    this.currentLang = "th";
    this.tranService.use(this.currentLang);
  }
  to_productList() {
    this.router.navigate(['Pmain', 'product-list']);
  }
  to_userList() {
    this.router.navigate(['Pmain', 'user-list']);
  }
  to_usergroupList() {
    this.router.navigate(['Pmain', 'usergroup-list']);
  }
  to_companyList() {
    this.router.navigate(['Pmain', 'company-list']);
  }
  toLogin() {
    this.router.navigate(['']);
  }
}
