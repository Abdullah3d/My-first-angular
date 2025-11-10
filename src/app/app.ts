import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent { }
