import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { Artist } from './Artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent{
   artists!: Artist[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let url = environment.baseUrl+ "/Artists";
    this.http.get<Artist[]>(url).subscribe(result => {
      this.artists = result;
    });
  }

}
