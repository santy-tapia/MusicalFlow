import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from './modules/barra-navegacion/barra-navegacion.component';
import { ThemeService } from './services/theme.service';
import { Inject } from '@angular/core';
import { FooterComponent } from "./modules/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, BarraNavegacionComponent, FooterComponent]
})
export class AppComponent {
  title = 'MusicalFlow';
  constructor(@Inject(ThemeService) public themeService: ThemeService) { }

  get theme() {
    return this.themeService.darkMode ? 'dark' : 'light';
  }

}
