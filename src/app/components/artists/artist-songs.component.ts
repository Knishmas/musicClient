// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { environment } from 'environments/environment';
// import { ArtistSongs } from '../songs/artistSongs';

// @Component({
//   selector: 'app-artist-songs',
//   templateUrl: 'artist-songs.component.html',
//   styleUrls: ['./artist-songs.component.css']
// })

// export class ArtistSongsComponent implements OnInit {
//   id?:number;
//   artistSongs!: ArtistSongs;
//   constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
//    }

//   ngOnInit(): void {
//     let idParam = this.activatedRoute.snapshot.paramMap.get('id');
//     this.id = idParam ? +idParam : 0;
//     let url = `${environment.baseUrl}api/Artists/Songs/${this.id}`;
//     this.http.get<ArtistSongs>(url).subscribe(result => {
//       this.artistSongs = result;
//     });

//   }

// }
