import {  AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonList, IonSlides, isPlatform } from '@ionic/angular';

import * as Photoswipe from 'photoswipe';
import * as PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

import { BikeService } from 'src/app/api/bike.service';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductsAutoCompleteServiceService } from 'src/app/api/products-auto-complete-service.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  category: string;
  productcode:string;
  data = null;

  slideImages=[];

  opts = {
    freeMode: true,
    slidesPerView: 1,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 100
  }

  height:number;
  width:number;
 public onBoardSlides= [];
 @ViewChild ('mainSlides',{static:true}) slides:IonSlides

  categorySlidesVisible = false;

  activeCategory = 0;
  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  listElements = [];
  @ViewChild(IonContent) content: IonContent;
  // @ViewChild(IonSlides) slides: IonSlides;


  product:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bikeService: BikeService,
    private productsAutoCompleteServiceService: ProductsAutoCompleteServiceService
  ) {}

  async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.productcode = this.route.snapshot.paramMap.get('productcode');
    console.log(this.category);
    

    const advert = await this.productsAutoCompleteServiceService.productDetail(this.category,this.productcode)
    console.log(advert);
     this.product=advert.data;
     this.slideImages=advert.data.advert.images;
     console.log(this.slideImages)
    
  }

  onScroll(ev) {
    const offset = ev.detail.scrollTop;
    this.categorySlidesVisible = offset > 500;

    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;
      if (this.isElementInViewport(item)) {
        this.activeCategory = i;
        this.slides.slideTo(i, 1000);
        break;
      }
    }
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }


  public goBack(){
    this.router.navigate(['home'])

  }

  // public skipBtn(){
  //   this.router.navigate(['home'])
  // }

  // public goNext(){
  //   this.slides.slideNext();
  // }


  getStyle(slide): any {
    return {"background-image" :`url(${slide.source})`,"height":"200px",width:this.width+"px","background-size": "cover"};


   // background-image:url(../../../../assets/images/+slide.img)
}

}
