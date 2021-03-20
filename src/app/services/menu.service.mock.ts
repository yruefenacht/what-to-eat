import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  getMenus(): Observable<Menu[]> {
    return of([
      {
        title: 'Ravioli',
        image: 'src/to/img',
        duration: 60,
        tags: ['Vegan']
      }
    ]);
  }
}
