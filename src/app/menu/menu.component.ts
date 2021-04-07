import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu;
  @Input() isLast: boolean;
  private snackBarDuration = 5000;

  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void { }

  deleteMenu(): void {
    const menuDialogRef = this.dialog.open(MenuDialogComponent);
    menuDialogRef.afterClosed().subscribe(deleteMenu => {
      if (deleteMenu) {
        this.menuService.deleteMenu(this.menu.id, this.menu.imageBucket)
          .then(() => {
            this.openSnackbar();
          });
      }
    });
  }

  private openSnackbar(): void {
    this.snackbar.open('Menu deleted', '', { duration: this.snackBarDuration });
  }

  get auth(): Observable<User | null> {
    return this.authService.user$;
  }

}

@Component({
  selector: 'app-menudialog',
  templateUrl: './menu.dialog.html'
})
export class MenuDialogComponent {}
