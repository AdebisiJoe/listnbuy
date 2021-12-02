import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home-routing.module';
import { AboutusPage } from './aboutus/aboutus.page';
import { FaqPage } from './faq/faq.page';
import { FeedbackPage } from './feedback/feedback.page';
import { HomepagePage } from './homepage/homepage.page';
import { OnboardingPage } from './onboarding/onboarding.page';
import { PrivacypolicyPage } from './privacypolicy/privacypolicy.page';
import { TermsandconditionPage } from './termsandcondition/termsandcondition.page';
import { StartPage } from './start/start.page';
import { StartchoicePage } from './startchoice/startchoice.page'
import { SellerprofilePage } from '../markets/sellerprofile/sellerprofile.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelluploadPage } from './sellupload/sellupload.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    FontAwesomeModule,
    SharedDirectivesModule
    
  ],
  declarations: [
    AboutusPage,
    FaqPage,
    FeedbackPage,
    HomepagePage,
    OnboardingPage,
    PrivacypolicyPage,
    TermsandconditionPage,
    StartPage,
    StartchoicePage,
    SellerprofilePage,
    SelluploadPage
    

  ]
})
export class HomeModule {

  
}
