import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [
    AngularFireModule
  ]
})
export class AppFirebaseModule { }
