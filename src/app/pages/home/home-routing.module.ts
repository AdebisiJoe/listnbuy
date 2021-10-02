import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusPage } from './aboutus/aboutus.page';
import { FaqPage } from './faq/faq.page';
import { FeedbackPage } from './feedback/feedback.page';
import { HomepagePage } from './homepage/homepage.page';
import { OnboardingPage } from './onboarding/onboarding.page';
import { PrivacypolicyPage } from './privacypolicy/privacypolicy.page';
import { TermsandconditionPage } from './termsandcondition/termsandcondition.page';
import { StartPage } from './start/start.page';

const routes: Routes = [
  {
    path: 'start',
    component: StartPage
  },
  {
    path: 'aboutus',
    component: AboutusPage
  },
  {
    path: 'faq',
    component: FaqPage
  },
  {
    path: 'feedback',
    component: FeedbackPage
  },
  {
    path: '',
    component: HomepagePage
  },
  {
    path: 'home',
    component: HomepagePage
  },
  {
    path: 'onboarding',
    component: OnboardingPage
  },
  {
    path: 'privacypolicy',
    component: PrivacypolicyPage
  },
  {
    path: 'termsandcondition',
    component: TermsandconditionPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
