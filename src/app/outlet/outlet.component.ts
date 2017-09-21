import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

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
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  }

}
