import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Menu } from '../models/menu.model';
import { MenuForm } from '../models/menuform.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  menuList: AngularFirestoreCollection<Menu>;
  uploadTask: AngularFireUploadTask;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.menuList = this.firestore.collection('Menu');
  }

  getMenus(): Observable<Menu[]> {
    return this.menuList.valueChanges({ idField: 'id' });
  }

  getMenuById(id: string): Observable<MenuForm> {
    return this.firestore.doc<Menu>('Menu/' + id).valueChanges();
  }

  updateMenu(id: string, menu: MenuForm): Promise<void> {
    return this.menuList.doc(id).update(menu);
  }

  deleteMenu(id: string, imageBucket: string): Promise<void> {
    this.storage.ref(imageBucket).delete();
    return this.menuList.doc(id).delete();
  }

  uploadMenu(payload: any, onSuccess: () => void): void {
    const file = payload.image;
    const filepath = `menus/${new Date().getTime()}_${file.name}`;
    const ref = this.storage.ref(filepath);
    this.uploadTask = this.storage.upload(filepath, file);

    this.uploadTask.snapshotChanges().pipe(
      finalize(async () => {
        const menuImageURL = await ref.getDownloadURL().toPromise();
        payload.image = menuImageURL;
        payload.imageBucket = filepath;
        await this.menuList.add(payload);
        onSuccess();
      })
    ).subscribe();
  }
}
