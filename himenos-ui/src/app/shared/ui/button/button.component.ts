import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {NgClass, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'kady-button',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
  @Input() buttonType: string = '';
  @ViewChild('button', {static: true}) button!: ElementRef;
  @Output() buttonClick = new EventEmitter<any>;
  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const buttonWidth = this.button.nativeElement.offsetWidth;
    const borderRadius = buttonWidth / 21; // Example calculation
    this.renderer.setStyle(this.button.nativeElement, '--dynamic-border-radius', `${borderRadius}px`);
  }

  emitOutput() {
    this.buttonClick.emit()
  }
}
