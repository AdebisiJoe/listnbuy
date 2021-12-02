import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goToSellerUploadPage(){
    this.router.navigateByUrl(`/sellupload`);
  }

}
