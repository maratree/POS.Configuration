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
  menuListData = [{ "id": "01", "menuname": "A", "mom": "0" },
  { "id": "0101", "menuname": "AA", "mom": "01" },
  { "id": "010101", "menuname": "AAA", "mom": "0101" }]
  ngOnInit() {
    // menu tree
    // $(document).ready(function () {
    //   $('label.tree-toggler').click(function () {
    //     $(this).parent().children('ul.tree').toggle(300);
    //   });
    // });
    // end menu tree
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
    // Model
    $(document).ready(function () {
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
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
