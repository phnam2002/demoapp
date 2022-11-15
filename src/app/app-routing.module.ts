import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CndvListComponent } from './cndv-list/cndv-list.component';
import { CreateCndvComponent } from './create-cndv/create-cndv.component';
import { UpdateCndvComponent } from './update-cndv/update-cndv.component';

const routes: Routes = [
  {path: 'cndvs',component: CndvListComponent},
  {path: 'create-cndvs', component: CreateCndvComponent},
  {path: '',redirectTo: 'cndvs',pathMatch: 'full'},
  {path: 'update-cndvs/:id', component: UpdateCndvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
