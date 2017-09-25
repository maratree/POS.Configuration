import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
