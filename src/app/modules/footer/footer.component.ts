import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../servicio/theme.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(@Inject(ThemeService) public themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.darkModeChange.subscribe((darkMode) => {
      const footer = document.querySelector('.footer');
      if (footer) {
        if (darkMode) {
          footer.classList.add('dark-theme');
          footer.classList.remove('light-theme');
        } else {
          footer.classList.add('light-theme');
          footer.classList.remove('dark-theme');
        }
      }
    });
  }
}