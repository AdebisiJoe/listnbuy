import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonList, IonSlides, isPlatform } from '@ionic/angular';
import { Platform } from '@ionic/angular';

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
  productcode: string;
  data = null;
  user_encoded_id:string;


  slideImages = [];

  opts = {
    freeMode: true,
    slidesPerView: 1,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 100,
  };

  thumbOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    loop: true,
    spaceBetween: 5,
  };

  height: number;
  width: number;
  public onBoardSlides = [];
  @ViewChild('mainSlides', { static: true }) slides: IonSlides;
  @ViewChild('thumbslides', { static: true }) thumbslides: IonSlides;

  categorySlidesVisible = false;

  activeCategory = 0;
  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  listElements = [];
  @ViewChild(IonContent) content: IonContent;
  // @ViewChild(IonSlides) slides: IonSlides;

  product: any;
  seller:any;
  similarAds=[];
  sellercontactbutton:boolean=false;
  sellerdetailshown:boolean=false;

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 2.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bikeService: BikeService,
    private productsAutoCompleteServiceService: ProductsAutoCompleteServiceService,
    platform: Platform
  ) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
      this.height = platform.height();
      this.width = platform.width();
    });
  }

  async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.productcode = this.route.snapshot.paramMap.get('productcode');
    console.log(this.category);

    const advert = await this.productsAutoCompleteServiceService.productDetail(
      this.category,
      this.productcode
    );
    console.log(advert);
    this.product = advert.data;
    this.slideImages = advert.data.advert.images;

    this.similarAds = advert.data.similar_ads;
    console.log(this.slideImages);
    this.seller=advert.data.seller;
    this.user_encoded_id=this.seller.encoded_id;
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
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  public goBack() {
    this.router.navigate(['home']);
  }

  // public skipBtn(){
  //   this.router.navigate(['home'])
  // }

  // public goNext(){
  //   this.slides.slideNext();
  // }

  getStyle(slide): any {
    return {
      'background-image': `url(${slide.source})`,
      height: (this.height*0.35)+'px',
      width: this.width + 'px',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position':'center'
    };
  }

  getThumbnailStyle(slide): any {
    return {
      'background-image': `url(${slide.source})`,
      height: '45px',
      width: '45px',
      'background-size': 'cover',
      'border-style': 'solid',
      'border-width': '0.5px',
      'border-radius': '5px',
      'border-color': '#166BFE'
    };
  }

  leftIconStyle():any{
    return {
      'position': 'absolute',
      'top': (this.height*0.20)+'px',
      'left': '16px',
      'font-size': '25px',
      'z-index': "2"
    };
  }

  rightIconStyle():any{
    return {
      'position': 'absolute',
      'top': (this.height*0.20)+'px',
      'right': '16px',
      'font-size': '25px',
      'z-index': "2"
    };
  }


  videoStyle():any{
    return {
      'position': 'absolute',
      'top':(this.height*0.30)+'px',
      'left': '16px',
      'font-size': '25px',
      'z-index': "2"
    };
  }


  viewsStyle():any{
    return {
      'position': 'absolute',
      'top': (this.height*0.28)+'px',
      'right': '16px',
      'font-size': '25px',
      'z-index': "2",
      'width':'100px',
      'height':'25px',
      'background-color':'#dddddf',
      'border-radius':'3px'
    };
  }

  viewsText():any{
    return {
      'position': 'absolute',
      'top': (this.height*0.28)+'px',
      'right': '16px',
      'font-size': '8px',
      
      'width':'100px',
      'height':'25px',
      "color": "black",
    };

  }

 



  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  goToSlideIndex(index: number) {
    this.slides.slideTo(index);
  }

  onRatingChange($event){

  }

  async gotoDetail(code:string){
     this.router.navigateByUrl(`/tabs/market/productdetail/${code}/${this.category}`);
  }
 
 async gotoSellerProfile(){
  this.router.navigateByUrl(`/tabs/market/sellerprofile/${this.user_encoded_id}`);
 }

 showsellercontactbutton(){
  this.sellercontactbutton=!this.sellercontactbutton;
  this.sellerdetailshown=!this.sellerdetailshown;
 }

}
