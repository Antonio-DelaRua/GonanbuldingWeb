import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel';
import { GaleryTrabajos } from '../../components/galery-trabajos/galery-trabajos';
import { Grafico } from '../../components/grafico/grafico';
import { ServiciosHome } from '../../components/servicios-home/servicios-home';
import { Publi } from '../../components/publi/publi';
import { About } from '../../components/about/about';


@Component({
  selector: 'app-home',
  imports: [ CarouselComponent, GaleryTrabajos, Grafico, ServiciosHome, Publi, About],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
