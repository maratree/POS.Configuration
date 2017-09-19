import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  currentLang = "en";
  productData=[1,2,3,4,5,6,7,8];
  prodtypeData=["sale type A","sale type B"];
  constructor(private tranService: TranslateService,private router: Router) { }
  
  ngOnInit() {
    this.tranService.use(this.currentLang);

  }
  onAddbtnClick(){
     this.router.navigate(['Pmain','product']);
  }

}
