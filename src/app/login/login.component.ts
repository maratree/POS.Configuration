import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }

  ngOnInit() {
    $('.message a').click(function () {
      $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
    this.tranService.use(this.currentLang);

  }
  dosignin() {
    this.router.navigate(['Pmain']);
  }

}
