import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiComponentsModule } from '@angular-monorepo/shared/ui-components';

@NgModule({
  declarations: [
    ArtistsComponent,
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    HttpClientModule,
    SharedUiComponentsModule
  ],
  providers: []
})
export class ArtistsModule { }
