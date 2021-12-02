import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './parallax.directive';
import { HideHeaderDirective } from './hide-header.directive';
import { HighlightDirective } from './highlight.directive';
import { Hightlight2Directive } from './highlight2.directive';


@NgModule({
  declarations: [ParallaxDirective, HideHeaderDirective,HighlightDirective,Hightlight2Directive],
  imports: [
    CommonModule
  ],
  exports: [ParallaxDirective, HideHeaderDirective,HighlightDirective,Hightlight2Directive],
})
export class SharedDirectivesModule { }
