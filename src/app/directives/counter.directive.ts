import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[count]'
})
export class CounterDirective implements OnInit, OnDestroy {
  @Input() count: number = 0;
  @Input() duration: number = 2000; // Duración en milisegundos
  @Input() startDelay: number = 500; // Retardo inicial

  private observer: IntersectionObserver | undefined;
  private hasAnimated: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          setTimeout(() => {
            this.animateCount();
          }, this.startDelay);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateCount(): void {
    const element = this.el.nativeElement;
    const start = 0;
    const increment = this.count / (this.duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= this.count) {
        current = this.count;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString();
    }, 16);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}