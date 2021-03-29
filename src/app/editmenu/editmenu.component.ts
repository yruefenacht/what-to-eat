import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuForm } from '../models/menuform.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.scss']
})
export class EditmenuComponent implements OnInit {

  menu: MenuForm;
  loading = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const menuId = this.route.snapshot.paramMap.get('id');
    if (menuId) {
      this.menuService.getMenuById(menuId).subscribe(menu => {
        this.menu = menu;
      });
    }
  }

  submitHandler(editedMenu: MenuForm): void {
    console.log(editedMenu);
  }

}
