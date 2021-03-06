import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu/menu.service';
import { MenuForm } from '../models/menuform.model';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddMenuComponent implements OnInit {

  loading = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  submitHandler(menu: MenuForm): void {
    this.loading = true;
    this.menuService.uploadMenu(menu)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        this.loading = false;
      });
  }

}
