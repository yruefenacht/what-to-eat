import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { AppComponent } from './app.component';
import { AddMenuComponent } from './addmenu/addmenu.component';
import { MenulistComponent } from './menulist/menulist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent, MenuDialogComponent, MenuSnackbarComponent } from './menu/menu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { MenuformComponent } from './menuform/menuform.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenulistComponent,
    PagenotfoundComponent,
    MenuComponent,
    AddMenuComponent,
    EditmenuComponent,
    MenuformComponent,
    MenuDialogComponent,
    MenuSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgxMatFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
