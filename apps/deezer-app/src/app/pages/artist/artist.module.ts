import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiComponentsModule } from '@angular-monorepo/shared/ui-components';




@NgModule({
  declarations: [
    ArtistComponent,
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    HttpClientModule,
    SharedUiComponentsModule
  ],
  providers: []
})
export class ArtistModule { }
