import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuformComponent } from './menuform/menuform.component';
import { MenulistComponent } from './menulist/menulist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: MenulistComponent },
  { path: 'add-menu', component: MenuformComponent },
  { path: 'edit-menu', component: MenuformComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
