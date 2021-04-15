import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {

  @Output() dropped = new EventEmitter<File>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event): void {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files[0]);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event): void {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event): void {
    $event.preventDefault();
    this.hovered.emit(false);
  }

}
