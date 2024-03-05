import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';
import { Novedades, Resultado } from '../../interfaces/new-release.interface';
import { RouterLink } from '@angular/router';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { CarouselModule } from 'primeng/carousel';
import { ThemeService } from '../../servicio/theme.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ImageURLPipe, CarouselModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
   public albums?:Novedades;

    constructor(private servicio:SpotifyService, public themeService: ThemeService){
      console.log(servicio.getNovedades());
        this.servicio.getNovedades()
        .then( (datos:Novedades) => {
          this.albums = datos;
          console.log(this.albums)
        })


    }
  get theme() {
    return this.themeService.darkMode ? 'dark' : 'light';
  }
}
