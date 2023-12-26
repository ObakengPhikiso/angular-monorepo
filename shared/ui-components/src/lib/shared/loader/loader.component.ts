import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import {LoaderService} from '@angular-monorepo/shared/helper-services';

@Component({
  selector: 'angular-monorepo-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(private loader: LoaderService) { }



}
