import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  public onBoardSlides= [];
  @ViewChild ('mainSlides',{static:true}) slides:IonSlides

  constructor(private router: Router) { }

  ngOnInit() {
    this.onBoardSlides=[
      {
        title:"list with us",
        img:'onboard1',
        desc:"Shop a vehicle of choice"
      },
      {
        title:"list with us",
        img:'onboard2',
        desc:"Find your bike's preference"
      },
      {
        title:"list with us",
        img:'onboard3',
        desc:"Select from a large catalogue of mechanical parts"
      },
      {
        title:"list with us",
        img:'onboard4',
        desc:"Shop for your needs in our General Market"
      }

    ]
  }

  public goBack(){
    this.slides.slidePrev();

  }

  public skipBtn(){
    this.router.navigate(['home'])
  }

  public goNext(){
    this.slides.slideNext();
  }

}
