import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/artists/artists.module').then(m => m.ArtistsModule), pathMatch: 'full'
  },
  {
    path: 'artist/:id', loadChildren: () => import('./pages/artist/artist.module').then(m => m.ArtistModule), pathMatch: 'full',
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
