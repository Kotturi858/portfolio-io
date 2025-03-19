import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dpsvg',
  imports: [],
  templateUrl: './dpsvg.component.html',
  styleUrl: './dpsvg.component.scss'
})
export class DpsvgComponent implements AfterViewInit {
  // @ViewChild('svgElement')
  // svgElement!: ElementRef<SVGElement>;

  // constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // const paths = this.svgElement.nativeElement.querySelectorAll('path');
    // paths.forEach((path: SVGPathElement) => {
    //   this.renderer.addClass(path, 'animate-stroke');
    // });
  }
}
