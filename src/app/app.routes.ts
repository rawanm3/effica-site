import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkComponent } from './components/work/work.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route
    { path: 'about', component: AboutComponent }, // About page
    { path: 'services', component: ServicesComponent} ,
    { path: 'work', component:WorkComponent} ,
    { path: 'testmonials', component: TestemonialsComponent } ,
    // { path: 'contactUs', component: ContactUsComponent },
    { path: 'contactUs', component: FooterComponent }  ,
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];;
