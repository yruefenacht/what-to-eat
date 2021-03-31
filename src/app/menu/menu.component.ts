import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu;
  @Input() isLast: boolean;

  constructor() { }

  ngOnInit(): void { }

  deleteMenu(): void {
    console.log(this.menu.id);
    // TODO: call delete from menuService...maybe add dialog and snackbar
  }

}
