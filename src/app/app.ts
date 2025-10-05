import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { CarouselComponent } from "./components/carousel/carousel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GonanbuldingWeb');
}
