import { Component, OnInit } from '@angular/core';
import { CounterDirective } from '../../directives/counter.directive';

@Component({
  selector: 'app-grafico',
  imports: [CounterDirective],
  templateUrl: './grafico.html',
  styleUrls: ['./grafico.css']
})
export class Grafico implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Esta función será llamada desde la directiva
  onCountComplete(): void {
    console.log('Todos los contadores han completado su animación');
  }
}