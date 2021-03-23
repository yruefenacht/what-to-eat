import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  ref: AngularFirestoreCollection<Menu>;

  constructor(private firestore: AngularFirestore) {
    this.ref = this.firestore.collection('Menu');
  }

  getMenus(): Observable<Menu[]> {
    return this.ref.valueChanges({ idField: 'id' });
  }

  insertMenu(menu: Menu): Promise<any> {
    return this.ref.add(menu);
  }

  updateMenu(id: string, menu: Menu): Promise<void> {
    return this.ref.doc(id).update(menu);
  }

  deleteMenu(id: string): Promise<void> {
    return this.ref.doc(id).delete();
  }
}
