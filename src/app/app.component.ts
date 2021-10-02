import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'General Marketplace', url: '/tabs/market/marketplace', icon: 'cart' },
    { title: 'Cars Marketplace', url: '/tabs/market/cars', icon: 'car' },
    { title: 'Bikes Marketplace', url: '/tabs/market/bikes', icon: 'bicycle' },
    { title: 'Parts Marketplace', url: '/tabs/market/vehicleparts', icon: 'cog' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Terms & Condition', 'Privacy Policy', 'Feedback', 'Frequently Asked Questions', 'About us'];
  constructor() {}
}
