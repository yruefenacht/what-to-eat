import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  getMenus(): Observable<Menu[]> {
    return of(
      Array(5)
        .fill(1)
        .map(el => {
          return {
            title: 'Ravioli',
            image: 'src/to/img',
            ingredients: ['Reis', 'Spinat'],
            duration: 60,
            tags: ['Vegan']
          };
        })
    );
  }
}
