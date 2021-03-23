import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service.mock';
import { Menu } from '../models/menu.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  menus: Observable<Menu[]>;

  constructor(private menuService: MenuService) {
    this.menus = menuService.getMenus();
  }

  ngOnInit(): void {}

}
