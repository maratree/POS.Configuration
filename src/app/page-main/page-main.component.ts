import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css']
})
export class PageMainComponent implements OnInit {

  currentLang = "en";
  constructor(private tranService: TranslateService, private router: Router) { }
  menuListData = [{ "id": "01", "name": "Master", "parent": "0", "icon": "computer" },
  { "id": "0101", "name": "Master Data", "parent": "01", "icon": "" },
  { "id": "010101", "name": "Company", "parent": "0101", "icon": "" },
  { "id": "010102", "name": "WorkStation", "parent": "0101", "icon": "" },
  { "id": "010103", "name": "Outlet", "parent": "0101", "icon": "" },
  { "id": "010104", "name": "Zone", "parent": "0101", "icon": "" },
  { "id": "010105", "name": "Shift Group", "parent": "0101", "icon": "" },
  { "id": "010106", "name": "Shift", "parent": "0101", "icon": "" },
  { "id": "010107", "name": "Decor", "parent": "0101", "icon": "" },
  { "id": "01010701", "name": "Decor Type", "parent": "010107", "icon": "" },
  { "id": "01010702", "name": "Decor Status Type", "parent": "010107", "icon": "" },
  { "id": "01010703", "name": "Decor", "parent": "010107", "icon": "" },

  { "id": "0102", "name": "Condiment", "parent": "01", "icon": "" },
  { "id": "010201", "name": "Condiment Group", "parent": "0102", "icon": "" },
  { "id": "010201", "name": "Condiment", "parent": "0102", "icon": "" },

  { "id": "0103", "name": "NonItem", "parent": "01", "icon": "" },
  { "id": "010301", "name": "Discount", "parent": "0103", "icon": "" },
  { "id": "010302", "name": "Service", "parent": "0103", "icon": "" },
  { "id": "010303", "name": "Vat", "parent": "0103", "icon": "" },

  { "id": "0104", "name": "Product", "parent": "01", "icon": "" },
  { "id": "010401", "name": "Product", "parent": "0104", "icon": "" },

  { "id": "0105", "name": "Menu", "parent": "01", "icon": "" },
  { "id": "010501", "name": "Menu", "parent": "0105", "icon": "" },

  { "id": "0106", "name": "Payment", "parent": "01", "icon": "" },
  { "id": "010601", "name": "Payment", "parent": "0106", "icon": "" },

  { "id": "0107", "name": "Printer", "parent": "01", "icon": "" },
  { "id": "010701", "name": "Printer", "parent": "0107", "icon": "" },
  { "id": "010702", "name": "Print Format", "parent": "0107", "icon": "" },
  { "id": "010703", "name": "Print Config", "parent": "0107", "icon": "" },

  { "id": "0108", "name": "Employee", "parent": "01", "icon": "" },
  { "id": "010801", "name": "Officer", "parent": "0108", "icon": "" },
  { "id": "010802", "name": "Entertain", "parent": "0108", "icon": "" },

  { "id": "0109", "name": "Promotion", "parent": "01", "icon": "" },
  { "id": "010901", "name": "Happy Hour", "parent": "0109", "icon": "" },

  { "id": "02", "name": "Setup", "parent": "0", "icon": "settings" },
  { "id": "0201", "name": "Product", "parent": "02", "icon": "" },
  { "id": "020101", "name": "Category Group", "parent": "0201", "icon": "" },
  { "id": "020102", "name": "Product Category", "parent": "0201", "icon": "" },
  { "id": "020103", "name": "Product Group", "parent": "0201", "icon": "" },
  { "id": "020104", "name": "Product Subgroup", "parent": "0201", "icon": "setings" },

  { "id": "0202", "name": "Sale Type", "parent": "02", "icon": "" },
  { "id": "020201", "name": "Sale Type", "parent": "0202", "icon": "" },

  { "id": "0203", "name": "Policy", "parent": "02", "icon": "" },
  { "id": "020301", "name": "Policy POS", "parent": "0203", "icon": "" },

  { "id": "0204", "name": "Message Templete", "parent": "02", "icon": "" },
  { "id": "020401", "name": "Message Cooking Note", "parent": "0204", "icon": "" },
  { "id": "020402", "name": "Message Guest Check", "parent": "0204", "icon": "" },
  { "id": "020403", "name": "Message Void", "parent": "0204", "icon": "" },

  { "id": "0205", "name": "Set Control", "parent": "02", "icon": "" },
  { "id": "020501", "name": "Set Keyboard", "parent": "0205", "icon": "" },

  { "id": "0206", "name": "Personal", "parent": "02", "icon": "" },
  { "id": "020601", "name": "Titel", "parent": "0206", "icon": "" },
  { "id": "020602", "name": "Division", "parent": "0206", "icon": "" },

  { "id": "0207", "name": "Report Config", "parent": "02", "icon": "" },
  { "id": "020701", "name": "Report Config", "parent": "0207", "icon": "" },

  { "id": "03", "name": "Security", "parent": "0", "icon": "security" },
  { "id": "0301", "name": "User", "parent": "03", "icon": "security" },
  { "id": "030101", "name": "User List", "parent": "0301", "icon": "security" },
  { "id": "030102", "name": "User Group", "parent": "0301", "icon": "security" },

  { "id": "04", "name": "Interface F&B Costing", "parent": "0", "icon": "transfer_within_a_station" },
  { "id": "0401", "name": "Include Item", "parent": "04", "icon": "transfer_within_a_station" },
  { "id": "0402", "name": "Generate Text File", "parent": "04", "icon": "transfer_within_a_station" },

  { "id": "05", "name": "Report", "parent": "0", "icon": "content_paste" },
  { "id": "0501", "name": "Report", "parent": "05", "icon": "" },]


  ngOnInit() {
    // menu tree
    // $(document).ready(function () {
    //   $('label.tree-toggler').click(function () {
    //     $(this).parent().children('ul.tree').toggle(300);
    //   });
    // });
    // end menu tree
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
    // Model
    $(document).ready(function () {
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
    $(".button-collapse").sideNav();
  }
  changLang() {
    this.currentLang = this.currentLang == "en" ? "th" : "en";
    this.tranService.use(this.currentLang);
  }
  changLangEN() {
    // this.currentLang = this.currentLang == "en" ? "th" : "en";
    this.currentLang = "en";
    this.tranService.use(this.currentLang);
  }
  changLangTH() {
    this.currentLang = "th";
    this.tranService.use(this.currentLang);
  }
  to_productList() {
    this.router.navigate(['Pmain', 'product-list']);
  }
  to_userList() {
    this.router.navigate(['Pmain', 'user-list']);
  }
  to_usergroupList() {
    this.router.navigate(['Pmain', 'usergroup-list']);
  }
  to_companyList() {
    this.router.navigate(['Pmain', 'company-list']);
  }
  toLogin() {
    this.router.navigate(['']);
  }
}
