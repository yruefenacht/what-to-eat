import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../services/menu/menu.service';
import { Menu } from '../models/menu.model';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  menus: Observable<Menu[]>;
  searchForm: FormGroup;
  readonly tagList: string[] = [
    'Vegan', 'Vegetarisch', 'Gesund', 'Beliebt', 'Einfach', 'Rohkost', 'Grill', 'Backen', 'Dessert'
  ];
  // TODO: Image upload border color feedback
  constructor(private menuService: MenuService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.menus = this.menuService.getMenus();
    this.searchForm = this.formBuilder.group({
      searchText: [''],
      searchTags: [[]]
    });
  }

  get searchText(): AbstractControl {
    return this.searchForm.get('searchText');
  }

  get searchTags(): AbstractControl {
    return this.searchForm.get('searchTags');
  }

}
