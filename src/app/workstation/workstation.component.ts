import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent implements OnInit {

  chkAll = "";
  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  ngOnInit() {
    this.tranService.use(this.currentLang);
    $(document).ready(function () {
      $('.materialboxed').materialbox();
    });
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
    $(document).ready(function () {
      $('select').material_select();
    });

  }
  chkOutletAll() {
    this.chkAll = "checked"
  }
  chkOutletUnAll() {
    this.chkAll = ""
  }

}
