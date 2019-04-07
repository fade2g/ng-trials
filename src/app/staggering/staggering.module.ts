import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TileContainerComponent} from './components/tile-container/tile-container.component';
import {TileComponent} from './components/tile-components/tile.component';
import {StaggeringPageComponent} from './components/staggering-page.component/staggering-page.component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    TileComponent,
    TileContainerComponent,
    StaggeringPageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    StaggeringPageComponent
  ]
})
export class StaggeringModule {
}
