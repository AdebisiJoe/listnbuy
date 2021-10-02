import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'favourite',
        loadChildren: () => import('../pages/home/favourite/favourite.module').then( m => m.FavouritePageModule)
      },
      {
        path: 'sell',
        loadChildren: () => import('../pages/home/sell/sell.module').then( m => m.SellPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../pages/home/messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/home/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'market',
        loadChildren: () =>
          import('../pages/markets/markets.module').then((m) => m.MarketsModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
