import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  menus: Menu[] = Array(10)
    .fill(1)
    .map(el => {
      return {
        title: 'Ravioli' + Math.random(),
        image: 'src/to/img',
        imageBucket: 'filepath',
        ingredients: ['Reis', 'Spinat'],
        duration: 60,
        tags: ['Vegan']
      };
    });

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }

  updateMenu(id: string, menu: Menu): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const index = this.menus.findIndex((v, i) => v.title === id);
      this.menus[index] = menu;
      resolve();
    });
  }

  deleteMenu(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.menus = this.menus.filter(v => v.title !== id);
      resolve();
    });
  }

  uploadMenu(payload: any): void {
    this.menus.push(payload);
  }
}
