import { Component } from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";

@Component({
  selector: 'kady-toolbar',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
