import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  prodtypeData = ["Type A", "Type B"];
  ngOnInit() {
     this.tranService.use(this.currentLang);
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }
   onCancelbtnClick() {
    this.router.navigate(['Pmain', 'product-list']);
  }

}
