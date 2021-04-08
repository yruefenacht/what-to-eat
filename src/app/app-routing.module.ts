import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './addmenu/addmenu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { LoginComponent } from './login/login.component';
import { MenulistComponent } from './menulist/menulist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginGuard } from './services/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    component: MenulistComponent
  },
  {
    path: 'new',
    component: AddMenuComponent,
    canActivate: [ LoginGuard ]
  },
  {
    path: 'edit/:id',
    component: EditmenuComponent,
    canActivate: [ LoginGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
