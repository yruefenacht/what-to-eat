import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';

export interface IMenuService {
  getMenus(): Observable<Menu[]>;
  insertMenu(menu: Menu): Promise<any>;
  updateMenu(id: string, menu: Menu): Promise<void>;
}
