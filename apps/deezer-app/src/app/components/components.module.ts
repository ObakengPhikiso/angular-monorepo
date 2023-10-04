import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ConvertTimePipe } from '../helpers/convert-time.pipe';
import { NumberFormatterPipe } from '../helpers/number-formatter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

const routes: Routes = []

@NgModule({
  declarations: [
    ConvertTimePipe,
    AlbumCardComponent,
    ArtistCardComponent,
    TopTracksComponent,
    NumberFormatterPipe,
    LoaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AlbumCardComponent,
    ArtistCardComponent,
    TopTracksComponent,
    NumberFormatterPipe,
    ConvertTimePipe,
    LoaderComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
