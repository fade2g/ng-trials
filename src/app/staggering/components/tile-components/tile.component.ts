import { Component, Input } from '@angular/core';
import { ImageTile } from '../../types/image-tile';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: [
        './tile.component.scss'
    ]
})
export class TileComponent {
    @Input() tile: ImageTile;
}
