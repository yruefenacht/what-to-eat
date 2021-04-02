import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  menus: Observable<Menu[]>;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menus = this.menuService.getMenus();
  }

}
