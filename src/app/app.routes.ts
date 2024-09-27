import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


export const routes: Routes = [
    {title: "Namari - Sexy as hell | About ", path: 'about', component: AboutComponent},
    {title: "Namari - Sexy as hell | Clients ", path: 'clients', component: ClientsComponent},
    {title: "Namari - Sexy as hell | Gallery ", path: 'gallery', component: GalleryComponent},
    {title: "Namari - Sexy as hell | Home ", path: 'home', component: HeaderComponent},
    {title: "Namari - Sexy as hell | Home ", path: '/', component: HeaderComponent},
    {title: "Namari - Sexy as hell | Pricing ", path: 'pricing', component: PricingComponent},
    {title: "Namari - Sexy as hell | Services ", path: 'services', component: ServicesComponent},
    {title: "Namari - Sexy as hell | Testimonials ", path: 'testimonials', component: TestimonialsComponent},
    {title: "Namari - Sexy as hell | Notfound ", path: '**', component: NotfoundComponent}
];
