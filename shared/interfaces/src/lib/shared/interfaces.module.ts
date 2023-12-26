import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export {Album} from './album'
export {Artist} from './artist'
export {Track} from './track'

@NgModule({
  imports: [CommonModule],
})
export class SharedInterfacesModule {}
