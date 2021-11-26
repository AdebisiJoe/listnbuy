import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StoreService } from 'src/app/api/store.service';
import { AuthService } from 'src/app/api/auth.service';

import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";
  showPassword: boolean = false;
  user:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: StoreService,
    private loader: NgxUiLoaderService,
    //private toastr: ToastrService
  ) {}

  async ngOnInit() {
    this.user=await this.store.getUser();

    if (this.user){
      this.router.navigate(['sell']);
    }

  }

  loginUser () {
    this.loader.start("login");
    this.authService.login(this.email, this.password).subscribe(
      async (resp: any) => {
        this.loader.stop("login");
        if (resp.status === "error") {
         // this.toastr.error("Incorrect Login Details");
          return;
        }

        await this.store.saveUser(resp.user);
        await this.store.saveAuth(resp.token);

        console.log(resp.user)

        this.router.navigateByUrl("/sell");
        
      },
      (error: any) => {
        this.loader.stop("login");
       // this.toastr.error("Network Error");
        return;
      }
    );
  }

}
