import { Component, Input } from '@angular/core';
import { Album } from '../../interfaces/album';

@Component({
  selector: 'angular-monorepo-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  @Input() album!: Album;

}
