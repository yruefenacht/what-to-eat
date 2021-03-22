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

  ref: AngularFirestoreCollection<Menu>;
  menus: Observable<Menu[]>;

  constructor(private firestore: AngularFirestore) {
    this.ref = this.firestore.collection('Menu');
    this.menus = this.ref.valueChanges();
  }

  getMenus(): Observable<Menu[]> {
    return of(
      Array(100)
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
