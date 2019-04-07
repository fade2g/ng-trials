import {Component, OnInit} from '@angular/core';
import {ImageTile} from '../../types/image-tile';

@Component({
  selector: 'app-staggering-page.component',
  templateUrl: './staggering-page.component.component.html',
  styleUrls: ['./staggering-page.component.component.scss']
})
export class StaggeringPageComponent implements OnInit {

  public tiles: Array<ImageTile> = [];

  constructor() { }

  ngOnInit() {
    this.tiles.push(new ImageTile('BMW', 'assets/bmw.png'));
    this.tiles.push(new ImageTile('Audi', 'assets/audi.png'));
    this.tiles.push(new ImageTile('Mercedes', 'assets/mercedes.png'));
    for (let i = 0; i < 20; i++) {
      this.tiles.push(new ImageTile(`Brand ${i}`, `attest/brand${i}`));
    }
  }

}
