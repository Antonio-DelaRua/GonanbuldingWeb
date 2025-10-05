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
    { src: 'assets/img/project1.jpg', alt: 'Proyecto 1 - exterior', title: '2022' },
    { src: 'assets/img/service1.jpg', alt: 'Proyecto 2 - detalle interior', title: '2022' },
    { src: 'assets/img/service2.jpg', alt: 'Proyecto 3 - obra en progreso', title: 'Proyecto 3' },
    { src: 'assets/img/service3.jpg', alt: 'Proyecto 4 - instalación', title: 'Proyecto 4' },
    { src: 'assets/img/service4.jpg', alt: 'Proyecto 5 - revestimiento', title: 'Proyecto 5' },
    { src: 'assets/img/service5.jpg', alt: 'Proyecto 6 - acabados', title: 'Proyecto 6' },
    { src: 'assets/img/service6.jpg', alt: 'Proyecto 7 - exteriores', title: 'Proyecto 7' },
    { src: 'assets/img/21.png', alt: 'Proyecto 8 - muestra', title: 'Proyecto 8' }
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
