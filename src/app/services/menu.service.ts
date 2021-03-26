import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Menu } from '../models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  collection: AngularFirestoreCollection<Menu>;
  uploadTask: AngularFireUploadTask;
  menuImageURL: string;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.collection = this.firestore.collection('Menu');
  }

  getMenus(): Observable<Menu[]> {
    return this.collection.valueChanges({ idField: 'id' });
  }

  updateMenu(id: string, menu: Menu): Promise<void> {
    return this.collection.doc(id).update(menu);
  }

  deleteMenu(id: string): Promise<void> {
    return this.collection.doc(id).delete();
  }

  async uploadMenu(payload: any): Promise<void> {
    const file = payload.image;
    const filepath = `menus/${new Date().getTime()}_${file.name}`;
    const ref = this.storage.ref(filepath);
    this.uploadTask = this.storage.upload(filepath, file);

    this.uploadTask.snapshotChanges().pipe(
      finalize(async () => {
        this.menuImageURL = await ref.getDownloadURL().toPromise();
        payload.image = this.menuImageURL;
        payload.imageBucket = filepath;
        await this.collection.add(payload);
      })
    ).toPromise();
  }
}
