import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../interfaces/album';
import { Artist } from '../../interfaces/artist';
import { Track } from '../../interfaces/track';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'angular-monorepo-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, OnDestroy {
  artist!: Artist;
  artistId!: number;
  top5: Track[] = [];
  albums: Album[] = [];

  constructor(private apiService: ApiService, private curRouter: ActivatedRoute, private router: Router) {
    this.artist = router.getCurrentNavigation()?.extras.state as Artist;
  }

  ngOnInit(): void {
    this.curRouter.params.subscribe((data: any) => {
      this.artistId = data.id
    });
    if (this.artist === undefined) this.getCurrentArtist();
    this.getTop5Tracks();
    this.getAlbums();
  }

  getCurrentArtist() {
    return this.apiService.getArtistById(this.artistId).subscribe((res: any) => {
      this.artist = res;
    })
  }

  getTop5Tracks() {
    return this.apiService.getTop5(this.artistId).subscribe((res: any) => {
      this.top5.push(...res.data);
    }, (err: unknown) => err)
  }

  getAlbums() {
    return this.apiService.getAlbums(this.artistId).subscribe((res: any) => {
      const artist_albums: Album[] = res.data;
      artist_albums.sort((a, b) => new Date(a.release_date).getFullYear() - new Date(b.release_date).getFullYear());
      this.albums.push(...artist_albums);
    }, (err) => err)
  }

  ngOnDestroy() {
    this.getCurrentArtist().unsubscribe();
    this.getTop5Tracks().unsubscribe();
    this.getAlbums().unsubscribe();
  }
}
