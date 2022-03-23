import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlightExpt'
})
export class HighlightDirective implements OnInit, OnChanges {

  @Input('appHighlight') backgroundColor: string = 'yellow';

  @Input() 
  @HostBinding('style.color')
  color: string = 'dark';

  @HostListener('mouseenter', ['$event'])
  handleMouseEnter(event: MouseEvent): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.colorChange.emit('red');
  }

  @HostListener('mouseleave')
  handleMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.colorChange.emit('black');
  }


  @Output() colorChange: EventEmitter<string> = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // console.log('HighlightDirective#constructor');

    // (this.el.nativeElement as HTMLElement).addEventListener('mouseenter', () => {
    //   this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    // });

    // (this.el.nativeElement as HTMLElement).addEventListener('mouseleave', () => {
    //   this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    // })
  }

  ngOnInit(): void {
    // console.log(this.backgroundColor);
    // this.setBackground();
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges');
    // (this.el.nativeElement as HTMLElement).style.backgroundColor = this.backgroundColor;

    this.setBackground();
  }

  private setBackground(): void {
    // (this.el.nativeElement as HTMLElement).style.backgroundColor = this.backgroundColor;

    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.backgroundColor
    )
  }
}
