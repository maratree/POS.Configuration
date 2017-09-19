import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  ngOnInit() {
    this.tranService.use(this.currentLang);
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
    $(document).ready(function () {
      $('.materialboxed').materialbox();
    });
    this.tranService.use(this.currentLang);
  }
  onCancelbtnClick() {
    this.router.navigate(['Pmain', 'company-list']);
  }
}
