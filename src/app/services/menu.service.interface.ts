import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';
import { MenuForm } from '../models/menuform.model';

export interface IMenuService {
  getMenus(): Observable<Menu[]>;
  getMenuById(id: string): Observable<MenuForm>;
  updateMenu(id: string, menu: Menu): Promise<void>;
  deleteMenu(id: string): Promise<void>;
  uploadMenu(payload: any, onSuccess: () => void): void;
}
