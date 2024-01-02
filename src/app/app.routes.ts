import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ShopmComponent } from './components/shopm/shopm.component';
import { ShopwComponent } from './components/shopw/shopw.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopseComponent } from './components/shopse/shopse.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

export const routes: Routes = [
    {'path': 'home', 'title': 'Home', component:HomepageComponent},
    {'path': 'about', 'title': 'About As', component:AboutComponent},
    {'path': 'shopm', 'title': 'Shop | Men', component:ShopmComponent},
    {'path': 'shopw', 'title': 'Shop | Women', component:ShopwComponent},
    {'path': 'shopse', 'title': 'Shop | Else', component:ShopseComponent},
    {'path': 'contact', 'title': 'Contact', component:ContactComponent},
    {'path': '**', 'title': '404 | Page Not Found', component:NotfoundpageComponent}
];
