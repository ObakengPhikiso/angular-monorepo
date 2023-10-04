import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ArtistsComponent,
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: []
})
export class ArtistsModule { }
