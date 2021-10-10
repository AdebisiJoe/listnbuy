import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.page.html',
  styleUrls: ['./loginmodal.page.scss'],
})
export class LoginmodalPage implements OnInit {

  @Input()
  visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
