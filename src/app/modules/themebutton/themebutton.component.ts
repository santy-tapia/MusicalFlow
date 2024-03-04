import { Component } from '@angular/core';
import { ThemeService } from '../../servicio/theme.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  standalone: true,
  templateUrl: './themebutton.component.html',
  selector: 'app-theme-button',
  imports: [CommonModule, RouterLink, ButtonModule],
  styleUrls: ['./themebutton.component.css']
})
export class ThemebuttonComponent {
  isDarkMode:any;

  constructor(private themeService: ThemeService) { }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  theme() {
    return this.themeService.darkMode ? 'dark' : 'light';
  }
  toggleTheme() {

  }
}
