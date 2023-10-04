import { Component, Input,  } from '@angular/core';
import { Track } from '../../interfaces/track';

@Component({
  selector: 'angular-monorepo-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent  {
  @Input() tracks: Track[] = [];

}
