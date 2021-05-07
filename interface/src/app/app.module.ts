import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawListComponent } from './views/pages/draw-list/draw-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DrawRegisterComponent } from './views/pages/draw-register/draw-register.component'

@NgModule({
  declarations: [
    AppComponent,
    DrawListComponent,
    DrawRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
