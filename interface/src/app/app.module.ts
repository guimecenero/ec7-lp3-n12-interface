import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawListComponent } from './views/pages/draw/draw-list/draw-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DrawRegisterComponent } from './views/pages/draw/draw-register/draw-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistRegisterComponent } from './views/pages/artist/artist-register/artist-register.component';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { HomeComponent } from './views/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistListComponent } from './views/pages/artist/artist-list/artist-list.component';
import { InspirationComponent } from './views/pages/inspiration/inspiration.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawListComponent,
    ArtistListComponent,
    DrawRegisterComponent,
    ArtistRegisterComponent,
    DashboardComponent,
    HomeComponent,
    InspirationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
