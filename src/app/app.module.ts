import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppFirebaseModule } from './app-firebase.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { MatCardModule } from '@angular/material/card';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { AppComponent } from './app.component';
import { AddMenuComponent } from './addmenu/addmenu.component';
import { MenulistComponent } from './menulist/menulist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent, MenuDialogComponent } from './menu/menu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { MenuformComponent } from './menuform/menuform.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './services/pipe/search.pipe';

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
    HeaderComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MaterialFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
