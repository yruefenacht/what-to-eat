import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Menu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu;
  @Input() isLast: boolean;

  constructor(private menuService: MenuService, private dialog: MatDialog) { }

  ngOnInit(): void { }

  deleteMenu(): void {
    const menuDialogRef = this.dialog.open(MenuDialogComponent);
    menuDialogRef.afterClosed().subscribe(deleteMenu => {
      if (deleteMenu) {
        this.menuService.deleteMenu(this.menu.id);
      }
    });
  }

}

@Component({
  selector: 'app-menudialog',
  templateUrl: './menu.dialog.html'
})
export class MenuDialogComponent {}
