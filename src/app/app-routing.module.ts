import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenulistComponent } from './menulist/menulist.component';

const routes: Routes = [
  {path: '', component: MenulistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
