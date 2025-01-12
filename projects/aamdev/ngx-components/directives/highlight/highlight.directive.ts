import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[aamdevHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input('aamdevHighlight') fullText: string = ''; // Para recibir el texto completo en donde buscaremos el texto a resaltar
  @Input() highlightedText: string = ''; // Para recibir el texto a resaltar
  @Input() color: string = 'yellow'; // Para recibir el color con el que se resaltará el texto

  constructor(private el: ElementRef, private rederer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    const highlightChanges = changes['highlightedText'];
    if (highlightChanges?.currentValue !== highlightChanges?.previousValue) {
      this.searchAndChangeText();
    }
  }

  private searchAndChangeText(): void {
    const regex = new RegExp(this.highlightedText, 'gi');
    const modifiedText = this.fullText.replace(regex, (match) => {
      return `<span style="background-color: ${this.color}">${match}</span>`;
    });
    this.rederer.setProperty(this.el.nativeElement, 'innerHTML', modifiedText);

  }

}
