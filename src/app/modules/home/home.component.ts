import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Novedades, Resultado } from '../../interfaces/new-release.interface';
import { RouterLink } from '@angular/router';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { CarouselModule } from 'primeng/carousel';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ImageURLPipe, CarouselModule],
  templateUrl: './home.component.html',
  styles: ''

})
export class HomeComponent {
   public albums: any;

    responsiveOptions: any[] | undefined;
    constructor(private servicio:SpotifyService, public themeService: ThemeService){
      console.log(servicio.get10AlbumsNuevos());
        this.servicio.get10AlbumsNuevos()
        .then( (datos:Novedades) => {
          this.albums = datos;
          console.log(this.albums)
        })


    }
    ngOnInit() {
        this.servicio.get10AlbumsNuevos().then((products) => {
            this.albums = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }



  get theme() {
    return this.themeService.darkMode ? 'dark' : 'light';
  }
}
