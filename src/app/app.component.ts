import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { TestemonialsComponent } from "./components/testemonials/testemonials.component";
import { WorkComponent } from "./components/work/work.component";
import { ServicesComponent } from "./components/services/services.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [ FooterComponent, TestemonialsComponent, WorkComponent, ServicesComponent, AboutComponent, HomeComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
