import { Component, Input } from '@angular/core';
import { Album } from '@angular-monorepo/shared/interfaces';

@Component({
  selector: 'angular-monorepo-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  @Input() album!: Album;

}
