import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimSaveHomeComponent } from './simsavehome/simsavehome.component';
import { SimSaveLoginComponent } from './simsavelogin/simsavelogin.component';

const routes: Routes = [
  { path: '', component: SimSaveHomeComponent },
  { path: 'simsavelogin', component: SimSaveLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}