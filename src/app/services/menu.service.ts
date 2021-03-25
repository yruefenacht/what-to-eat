import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  ref: AngularFirestoreCollection<Menu>;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.ref = this.firestore.collection('Menu');
  }

  getMenus(): Observable<Menu[]> {
    return this.ref.valueChanges({ idField: 'id' });
  }

  updateMenu(id: string, menu: Menu): Promise<void> {
    return this.ref.doc(id).update(menu);
  }

  deleteMenu(id: string): Promise<void> {
    return this.ref.doc(id).delete();
  }

  uploadMenu(payload: any): void {
    const file = payload.image;
    const filepath = `menus/${new Date().getTime()}_${file.name}`;
    const ref = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, file);

    task.snapshotChanges().pipe(
      finalize(async () => {
        const downLoadURL = await ref.getDownloadURL().toPromise();
        payload.image = downLoadURL;
        payload.imageBucket = filepath;
        this.ref.add(payload);
      })
    ).toPromise();
  }
}
