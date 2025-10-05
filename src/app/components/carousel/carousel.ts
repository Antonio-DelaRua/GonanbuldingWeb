import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Si usas routerLink en tu HTML
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
  standalone: true, // Solo si quieres standalone
  imports: [RouterModule,  NgFor], // Aquí SOLO van Componentes, Directivas, Pipes, o NgModules
})
export class CarouselComponent {
  goToSlide(i: number) {
  this.current = i;
}
  slides = [
    {
      img: 'assets/slider-main/bg1.jpg',
      badge: 'GONAN BUILDING CONSTRUCCIONES',
      subtitle: 'TE LO PONEMOS FACIL',
      title: 'ELIGE LOS MEJORES',
      titleHighlight: 'PROFESIONALES',
      btnText: 'ELIGE NUESTROS SERVICIOS',
      btnLink: '/services'
    },
    // Puedes añadir más slides si quieres
    {
      img: 'assets/slider-main/bg1.jpg',
      badge: 'GONAN BUILDING CONSTRUCCIONES',
      subtitle: 'TE LO PONEMOS FACIL',
      title: 'ELIGE',
      titleHighlight: 'PROFESIONALES',
      btnText: 'ELIGE NUESTROS SERVICIOS',
      btnLink: '/services'
    },
    {
      img: 'assets/slider-main/bg1.jpg',
      badge: 'GONAN BUILDING CONSTRUCCIONES',
      subtitle: 'TE LO PONE',
      title: 'ELIGE LOS MEJORES',
      titleHighlight: 'PROFESIONALES',
      btnText: 'ELIGE NUESTROS SERVICIOS',
      btnLink: '/services'
    },
        {
      img: 'assets/slider-main/bg1.jpg',
      badge: 'GONAN BUILDING CONSTRUCCIONES',
      subtitle: 'TE LO PONE',
      title: 'ELIGE LOS MEJORES',
      titleHighlight: 'PROFESIONALES',
      btnText: 'ELIGE NUESTROS SERVICIOS',
      btnLink: '/services'
    },
  ];
  current = 0;
  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
  }
  next() {
    this.current = (this.current + 1) % this.slides.length;
  }
}