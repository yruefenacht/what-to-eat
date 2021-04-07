import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppFirebaseModule } from './app-firebase.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { AppComponent } from './app.component';
import { AddMenuComponent } from './addmenu/addmenu.component';
import { MenulistComponent } from './menulist/menulist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent, MenuDialogComponent } from './menu/menu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { MenuformComponent } from './menuform/menuform.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

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
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFirebaseModule,
    ReactiveFormsModule,
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
    NgxMatFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
