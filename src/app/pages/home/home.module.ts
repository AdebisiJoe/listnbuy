import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

import { SharedDirectivesModule } from '../../directives/shared-directives.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    SharedDirectivesModule,
    FontAwesomeModule

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
  ]
})
export class HomeModule {

  
}
