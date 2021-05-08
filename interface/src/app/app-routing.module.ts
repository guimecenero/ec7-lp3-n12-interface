import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './views/pages/artist/artist-list/artist-list.component';
import { ArtistRegisterComponent } from './views/pages/artist/artist-register/artist-register.component';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { DrawListComponent } from './views/pages/draw/draw-list/draw-list.component';
import { DrawRegisterComponent } from './views/pages/draw/draw-register/draw-register.component';
import { HomeComponent } from './views/pages/home/home.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'draw',
    children:[

      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: DrawListComponent
      },
      {
        path: 'register',
        component: DrawRegisterComponent
      }
    ]
  },
  {
    path: 'artist',
    children:[

      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ArtistListComponent
      },
      {
        path: 'register',
        component: ArtistRegisterComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
