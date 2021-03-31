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
  menuId: string;
  loading = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.menuId = this.route.snapshot.paramMap.get('id');
    this.menuService.getMenuById(this.menuId).subscribe(menu => {
      if (menu) {
        this.menu = menu;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  submitHandler(editedMenu: MenuForm): void {
    this.loading = true;
    this.menuService.updateMenu(this.menuId, editedMenu).then(res => {
      this.loading = false;
      this.router.navigate(['']);
    }).catch(err => {
      console.log(err);
    });
  }

}
