import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galery-trabajos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery-trabajos.html',
  styleUrls: ['./galery-trabajos.css']
})
export class GaleryTrabajos {
  // Small curated set of images from the project's assets folder.
  images = [
    { src: 'assets/img/foto2.png', alt: 'Proyecto 1 - exterior', title: '2022' },
    { src: 'assets/img/foto3.png', alt: 'Proyecto 2 - detalle interior', title: '2022' },
    { src: 'assets/img/foto4.png', alt: 'Proyecto 3 - obra en progreso', title: 'Proyecto 3' },
    { src: 'assets/img/foto5.png', alt: 'Proyecto 4 - instalación', title: 'Proyecto 4' },
    { src: 'assets/img/foto7.png', alt: 'Proyecto 5 - revestimiento', title: 'Proyecto 5' },
    { src: 'assets/img/foto13.png', alt: 'Proyecto 6 - acabados', title: 'Proyecto 6' },
    { src: 'assets/img/foto15.png', alt: 'Proyecto 7 - exteriores', title: 'Proyecto 7' },
    { src: 'assets/img/foto2.png', alt: 'Proyecto 8 - muestra', title: 'Proyecto 8' }
  ];

  selectedIndex: number | null = null;

  get selectedImage() {
    return this.selectedIndex != null ? this.images[this.selectedIndex] : null;
  }

  open(index: number, event?: Event) {
    if (event) event.stopPropagation();
    this.selectedIndex = index;
  }

  close(event?: Event) {
    if (event) event?.stopPropagation();
    this.selectedIndex = null;
  }

  prev(event?: Event) {
    if (event) event.stopPropagation();
    if (this.selectedIndex == null) return;
    this.selectedIndex = (this.selectedIndex + this.images.length - 1) % this.images.length;
  }

  next(event?: Event) {
    if (event) event.stopPropagation();
    if (this.selectedIndex == null) return;
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }

  // Close lightbox on ESC
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (this.selectedIndex == null) return;
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

}
