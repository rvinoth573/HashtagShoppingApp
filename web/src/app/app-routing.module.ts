import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';


const routes: Routes = [
  { path: 'item', component: ItemlistComponent },
  { path: 'detail/:id', component: ItemdetailComponent },
  { path: '', component: ItemlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
