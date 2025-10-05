import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { CarouselComponent } from "./components/carousel/carousel";
import { FooterComponent } from "./components/footer/footer";
import { Home } from "./pages/home/home";
import { Grafico } from "./components/grafico/grafico";
import { ServiciosHome } from "./components/servicios-home/servicios-home";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CarouselComponent, FooterComponent, Home, Grafico, ServiciosHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GonanbuldingWeb');
}
