import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Album } from '../interfaces/album';
import { Artist } from '../interfaces/artist';
import { Track } from '../interfaces/track';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnDestroy {
  private baseUrl = environment.baseUrl;
  private artistsUrl = environment.artists;
  private searchUrl = environment.search;

  private artists$ = new BehaviorSubject<Artist[]>([]);
  artists = this.artists$.asObservable();


  constructor(private http: HttpClient) {

  }

  ngOnDestroy(): void {
    this.artists$.unsubscribe()
  }

  setArtists(artists: Artist[]) {
    this.artists$.next(artists)
  }

  // Get all artist belonging to a specific user
  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl)
  }

  // Get an artist by name for search functionality
  getArtist(name: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.searchUrl + `/${name}`);
  }

  // Get an artist by id
  getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseUrl}/artist/${id}`);
  }

  // Get top 5 tracks of an artist
  getTop5(id: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.baseUrl}/artist/${id}/top`);
  }

  // Get all albums that belongs to an artist
  getAlbums(id: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/artist/${id}/albums`);
  }
}
