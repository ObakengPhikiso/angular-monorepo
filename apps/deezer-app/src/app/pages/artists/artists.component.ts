import { Component, OnDestroy, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'angular-monorepo-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artists: Artist[] = [];

  // Add boolean for searching
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllArtists();
    this.searchArtist();
  }

  getAllArtists() {
    return this.apiService.getAllArtists().subscribe((res: any) => {
      const artists: Artist[] = res.data;
      artists.sort((a, b) => b.nb_fan - a.nb_fan)
      this.artists = [];
      this.artists.push(...artists)
    }, (err) => err)
  }

  searchArtist() {
    this.apiService.artists.subscribe((res: Artist[]) => {
      if (res === undefined) {
        this.getAllArtists()
      } else {
        this.artists = [];
        this.artists.push(...res)
      }

    }, (err) => err)
  }

  ngOnDestroy() {
    this.getAllArtists().unsubscribe();
  }
}
