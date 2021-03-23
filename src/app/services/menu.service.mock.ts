import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  menus: Menu[] = Array(5)
    .fill(1)
    .map(el => {
      return {
        title: 'Ravioli',
        image: 'src/to/img',
        ingredients: ['Reis', 'Spinat'],
        duration: 60,
        tags: ['Vegan']
      };
    });

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }

  insertMenu(menu: Menu): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(this.menus.push(menu));
    });
  }
}
