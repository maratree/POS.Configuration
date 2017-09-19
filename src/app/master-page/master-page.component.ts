import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService,private router: Router) { }

  ngOnInit() {
    this.tranService.use(this.currentLang);
     $(".button-collapse").sideNav({
      edge:'left', //เปลี่ยนการสไลด์หน้าออกข้างซ้ายหรือขวา
      closeOnClick:true,
      draggable:true //สไลด์เมนูอกมาจากด้านข้างยนโมบาย

    });
  }
  changLang() {
    this.currentLang = this.currentLang == "en" ? "th" : "en";
    this.tranService.use(this.currentLang);
  }
  changLangEN() {
    this.currentLang = "en";
    this.tranService.use(this.currentLang);
  }
  changLangTH() {
    this.currentLang = "th";
    this.tranService.use(this.currentLang);
  }
}
