import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  ref: AngularFirestoreCollection<Menu>
  menus: Observable<Menu[]>

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.ref = this.firestore.collection('Menu')
    this.menus = this.ref.valueChanges()
  }

}
