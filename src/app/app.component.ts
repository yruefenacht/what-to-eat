import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menus: Observable<any[]>
  constructor(private firestore: AngularFirestore) {
    this.menus = firestore.collection('Menu').valueChanges();
  }
}
