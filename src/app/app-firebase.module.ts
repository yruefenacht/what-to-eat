import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'what-to-eat',
      {
        authGuardFallbackURL: 'login',
        authGuardLoggedInURL: ''
      }
    )
  ],
  exports: [
    AngularFireModule,
    NgxAuthFirebaseUIModule
  ]
})
export class AppFirebaseModule { }
