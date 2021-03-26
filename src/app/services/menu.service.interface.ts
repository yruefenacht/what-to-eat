import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';

export interface IMenuService {
  getMenus(): Observable<Menu[]>;
  updateMenu(id: string, menu: Menu): Promise<void>;
  deleteMenu(id: string): Promise<void>;
  uploadMenu(payload: any): Promise<void>;
}
