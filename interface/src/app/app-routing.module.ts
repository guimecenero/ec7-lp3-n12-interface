import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawListComponent } from './views/pages/draw-list/draw-list.component';
import { DrawRegisterComponent } from './views/pages/draw-register/draw-register.component';

const routes: Routes = [

  {
    path: 'draw-list',
    component: DrawListComponent
  },
  {
    path: 'draw-register',
    component: DrawRegisterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
