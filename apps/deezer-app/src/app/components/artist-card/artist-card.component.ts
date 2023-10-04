import { Component, Input } from '@angular/core';
import { Artist } from '../../interfaces/artist';

@Component({
  selector: 'angular-monorepo-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent {
  @Input() artist!: Artist;
  @Input() artist_view = false;

}
