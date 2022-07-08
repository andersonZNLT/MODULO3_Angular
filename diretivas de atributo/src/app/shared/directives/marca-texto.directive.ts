import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
  @Input() corFundo: string = 'blue';
  @Input() corTexto: string = 'red';

  constructor(private elemento: ElementRef) { }
  ngOnInit(): void {
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow') {
    this.elemento.nativeElement.style.backgroundColor = this.corFundo || cor;
    this.elemento.nativeElement.style.color = this.corTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }

}
