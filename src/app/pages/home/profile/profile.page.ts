import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/api/store.service';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user:any;
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
    private storeService:StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private userService:UserService
  ) { }

 async ngOnInit() {
    this.user=await this.storeService.getUser();
    console.log(this.user.encoded_id);
    this.profile=await this.userService.getUserProfile(this.user.encoded_id);
    console.log(this.profile.data);
    this.profileimage=this.profile.data.info.profile_picture.source;
    this.profileData=this.profile.data;
    this.adverts=this.profile.data.adverts;
    this.reviews=this.profile.data.reviews;
  }

}
