import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-sellerprofile',
  templateUrl: './sellerprofile.page.html',
  styleUrls: ['./sellerprofile.page.scss'],
})
export class SellerprofilePage implements OnInit {
  user_encoded_id: string;
  profile:any;
  profileimage:string;
  profileData:any;
  adverts:[]=[];
  reviews:[]=[];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 1.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };
  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private userService:UserService
    ) { }

  async ngOnInit() {
    this.user_encoded_id = this.route.snapshot.paramMap.get('user_encoded_id');
    console.log(this.user_encoded_id);
    this.profile=await this.userService.getUserProfile(this.user_encoded_id);
    console.log(this.profile.data);
    this.profileimage=this.profile.data.info.profile_picture.source;
    this.profileData=this.profile.data;
    this.adverts=this.profile.data.adverts;
    this.reviews=this.profile.data.reviews;
  }


  onRatingChange($event){

  }

  async gotoDetail(code:string){
  
   // this.router.navigateByUrl(`/tabs/market/productdetail/${code}/${this.category}`);
  }

}
