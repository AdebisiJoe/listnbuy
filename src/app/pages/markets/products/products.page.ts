import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BikeService } from 'src/app/api/bike.service';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductsAutoCompleteServiceService } from 'src/app/api/products-auto-complete-service.service';
import {
  AutoCompleteService,
  AutoCompleteComponent,
  AutoCompleteOptions
} from 'ionic4-auto-complete';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  category: string;
  products: [];

  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;
  public otherTeamOptions:AutoCompleteOptions;
  public otherTeamIsSelecting:boolean = false;
  public teamOptions:AutoCompleteOptions;

  // public otherTeam:UserModel[] = [];
  // public selected:UserModel[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bikeService: BikeService,
    private productsAutoCompleteServiceService: ProductsAutoCompleteServiceService
  ) {}

  async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category);
    const adverts = await this.bikeService.getAllBikes(this.category);
    this.products = adverts.data.advert;
    console.log(this.products);
    this.productsAutoCompleteServiceService.getResults(this.category);
  }

  // submit(): void {
  //   let country = this.myForm.value.country;
  // }

  async search() {
    const products = await this.productsAutoCompleteServiceService.searchAdverts(this.searchbar.keyword);

    console.log(products);
    
  }

  async on(output, event) {
    console.log(event);
    // console.log(event);

    const products = await this.productsAutoCompleteServiceService.searchAdverts(event);
    this.products=products.data.advert;
    console.log(products);
  }

  

  async selectItem(name:string) {
    this.on('itemSelected', name);

    console.log(name)
  
    const products = await this.productsAutoCompleteServiceService.searchAdverts(this.searchbar.keyword);

    console.log(products);
    
  }

  async gotoDetail(code:string){
    
    // const product = await this.productsAutoCompleteServiceService.productDetail(this.category,code)
    // console.log(product);

    this.router.navigateByUrl(`/tabs/market/productdetail/${code}/${this.category}`);
  }


}
