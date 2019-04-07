import {Component, HostBinding, Input} from '@angular/core';
import {ImageTile} from '../../types/image-tile';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tile-container',
  templateUrl: './tile-container.component.html',
  styleUrls: [
    './tile-container.component.scss'
  ],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.tile', [
          style({opacity: 0, transform: 'scaleY(0)', 'transform-origin': 'top left'}),
          stagger(60, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
          ])
        ])
      ])
    ]),
  ]
})
export class TileContainerComponent {
  @Input() tiles: Array<ImageTile>;
  @HostBinding('@pageAnimations') public animatePage = true;
}
