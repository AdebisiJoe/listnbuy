import { Component, Input, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[hightlightChoice]'
  })
  export class Hightlight2Directive {
    constructor(public elm: ElementRef) {
    }
  
    @HostListener('click', [])
    onClick(): void {
      let parent = this.elm.nativeElement.parentNode;
      for (var i = 0; i < parent.children.length; i++) {
        parent.children[i].classList.remove('selected');
      }
      this.elm.nativeElement.classList.add('selected');
      this.elm.nativeElement.classList.remove('notselected');
    }
  }