import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-startchoice',
  templateUrl: './startchoice.page.html',
  styleUrls: ['./startchoice.page.scss'],
})
export class StartchoicePage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }


  goToLoginScreen(){
    this.router.navigate(['login']);
  }

  goToHomeScreen(){
    this.router.navigate(['home']);
  }

}
