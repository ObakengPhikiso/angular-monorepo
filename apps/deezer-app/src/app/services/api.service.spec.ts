import { TestBed } from '@angular/core/testing';

import { ApiService } from '../../../../../shared/core-data/src/lib/shared/api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { albums } from '../mock/albums_mock';
import { artists, mockArtist1 } from '../mock/artists_mock';
import { Artist } from '../../../../../shared/interfaces/src/lib/shared/artist';
import { Album } from '../../../../../shared/interfaces/src/lib/shared/album';
import { Track } from '../../../../../shared/interfaces/src/lib/shared/track';
import { top5List } from '../mock/top5_mock';
import { environment } from '../../../../../shared/environments/src/lib/shared/environment';


describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  const baseUrl = environment.baseUrl;
  const ARTISTS_URL = environment.artists;
  const SEARCH_URL = environment.search;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController)
  });


  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of artists belonging to a specific user', (done: any): void => {
    service.getAllArtists().subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res).toEqual(artists);
      done();
    })
    const request = httpMock.expectOne({
      method: 'GET',
      url: ARTISTS_URL
    })
    request.flush(artists);
  });

  it('should get artist by id and return an artist associated with the id', () => {
    const id = 892;
    service.getArtistById(id).subscribe((res: any) => {
      expect(res as Artist).toEqual(mockArtist1);
    })
    const request = httpMock.expectOne({
      method: 'GET',
      url: baseUrl + `/artist/${id}`
    })
    request.flush(mockArtist1)

  });

  it('should get artist by name and return a list artists related by name', () => {
    const name = 'eminem';
    service.getArtist(name).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res as Artist[]).toEqual(artists);
    })
    const request = httpMock.expectOne({
      method: 'GET',
      url: SEARCH_URL + '/' + name
    })
    request.flush(artists)

  });

  it('should get list of albums belonging to a given artist', () => {
    const id = 892;
    service.getAlbums(id).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res as Album[]).toEqual(albums);
    })
    const request = httpMock.expectOne({
      method: 'GET',
      url: `${baseUrl}/artist/${id}/albums`
    })
    request.flush(albums)

  });

  it('should get a top 5 tracks belonging to a specific artist', () => {
    const id = 892;
    service.getTop5(id).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res as Track[]).toEqual(top5List);
    })
    const request = httpMock.expectOne({
      method: 'GET',
      url: `${baseUrl}/artist/${id}/top`
    })
    request.flush(top5List);

  });



});
