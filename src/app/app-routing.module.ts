import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './components/artists/artist.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './counter.component';
import { LoginComponent } from './auth/login.component';
import {HealthCheckComponent} from './components/health-check/health-check.component';
import {SongsComponent} from './components/songs/songs.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'artists', component: ArtistComponent },
  { path: 'health-check', component: HealthCheckComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'songs/:id', component: SongsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
