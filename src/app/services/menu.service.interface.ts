import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';

export interface IMenuService {
  getMenus(): Observable<Menu[]>;
}
