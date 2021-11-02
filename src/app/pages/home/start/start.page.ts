import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  height: number;
  width: number;

  constructor(private router: Router, platform: Platform) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
      this.height = platform.height();
      this.width = platform.width();
    });
  }

  ngOnInit() {}

  getStyle(): any {
    return {
      '--background': 'none',
      'background-image': `url(../../../../assets/images/startbc.png)`,
      height: this.height + 'px',
      width: this.width + 'px',
    };

    // background-image:url(../../../../assets/images/+slide.img)
  }

  goToChoiceScreen(){
    this.router.navigate(['home']);
  }
}
