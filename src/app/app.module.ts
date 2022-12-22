import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artists/artist.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistSongsComponent } from './components/artists/artist-songs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SongsComponent } from './components/songs/songs.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LoginComponent} from './auth/login.component';
import {HealthCheckComponent} from './components/health-check/health-check.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    HomeComponent,
    ArtistComponent,
    ArtistSongsComponent,
    SongsComponent,
    HealthCheckComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
