import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { ArtistSongs } from './artistSongs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs?: ArtistSongs;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let artistId = idParam ? +idParam : null;

    //let url = `${environment.baseUrl}/Artists/artistsongs/${artistId}` 
     let url = artistId ? `${environment.baseUrl}/Artists/artistsongs/${artistId}` : `${environment.baseUrl}/Songs`;
    this.http.get<ArtistSongs>(url).subscribe(result => {
      this.songs = result;
      console.log(this.songs);
    });
  }

}
