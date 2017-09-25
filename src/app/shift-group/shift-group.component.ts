import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shift-group',
  templateUrl: './shift-group.component.html',
  styleUrls: ['./shift-group.component.css']
})
export class ShiftGroupComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  shiftGroup = [{"Code":"1","Name":"Period 1","Active":"active"},{"Code":"2","Name":"Period 2","Active":"active"}];
  ngOnInit() {
    this.tranService.use(this.currentLang);
    $(document).ready(function () {
      $('.materialboxed').materialbox();
    });
    this.tranService.use(this.currentLang);
  }

}
