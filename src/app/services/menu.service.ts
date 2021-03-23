import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  constructor(private firestore: AngularFirestore) { }

  getMenus(): Observable<Menu[]> {
    let ref: AngularFirestoreCollection<Menu> = this.firestore.collection('Menu');
    return ref.valueChanges();
  }
}
