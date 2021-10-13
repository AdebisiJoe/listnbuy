import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BikeService } from 'src/app/api/bike.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  category: string;
  products: [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bikeService: BikeService
  ) {}

  async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category);
    const adverts = await this.bikeService.getAllBikes(this.category);
    this.products = adverts.data.advert;
    console.log(this.products);
  }
}
