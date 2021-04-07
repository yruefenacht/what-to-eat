import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../models/menu.model';
import { MenuForm } from '../models/menuform.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  menus: Menu[] = Array(10)
    .fill(1)
    .map(el => {
      return {
        id: 'fakeId',
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

  getMenuById(id: string): Observable<MenuForm> {
    return of(this.menus.find(menu => menu.id === id));
  }

  updateMenu(id: string, menu: Menu): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const index = this.menus.findIndex((v, i) => v.id === id);
      this.menus[index] = menu;
      resolve();
    });
  }

  deleteMenu(id: string, imageBucket: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.menus = this.menus.filter(v => v.id !== id);
      resolve();
    });
  }

  uploadMenu(payload: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(this.menus.push(payload));
    });
  }
}
