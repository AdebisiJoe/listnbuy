import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'favourite',
    loadChildren: () => import('./pages/home/favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./pages/home/sell/sell.module').then( m => m.SellPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/home/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/home/profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
