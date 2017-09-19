import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-pmain',
  templateUrl: './master-pmain.component.html',
  styleUrls: ['./master-pmain.component.css']
})
export class MasterPmainComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  ngOnInit() {
    this.tranService.use(this.currentLang);
    $(".button-collapse").sideNav({
      edge: 'right', //เปลี่ยนการสไลด์หน้าออกข้างซ้ายหรือขวา
      closeOnClick: true,
      draggable: true //สไลด์เมนูอกมาจากด้านข้างยนโมบาย

    });
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
}
