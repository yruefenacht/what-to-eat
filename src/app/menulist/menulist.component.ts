import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  menus: Observable<any[]>
  
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.menus = this.firestore.collection('Menu').valueChanges()
  }

}
