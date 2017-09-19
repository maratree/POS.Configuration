import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  usergroupData = ["Administrator", "User admin", "Manager", "Cashier", "Waiter"];
  ngOnInit() {
    $(document).ready(function () {
      $('.materialboxed').materialbox();
    });
    this.tranService.use(this.currentLang);

  }
  onCancelbtnClick() {
    this.router.navigate(['Pmain', 'user-list']);
  }
}
