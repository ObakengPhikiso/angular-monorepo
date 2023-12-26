import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Artist } from '@angular-monorepo/shared/interfaces';
import { ApiService } from '@angular-monorepo/shared/core-data';

@Component({
  selector: 'angular-monorepo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  form: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  constructor(private apiService: ApiService, private router: Router) {
    this.search()
  }

  search() {
    this.form.get('search')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(res => this.apiService.getArtist(res))
    ).subscribe((data: any) => {
      const artists: Artist[] = data.data;
      this.apiService.setArtists(artists);
    })
  }

  onClick() {
    const currUrl: string = this.router.url;
    if (currUrl !== '/') this.router.navigateByUrl('/');
  }
}
