import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';
import { Novedades, Resultado } from '../../interfaces/new-release.interface';
import { RouterLink } from '@angular/router';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { ThemeService } from '../../servicio/theme.service';
@Component({
    selector: 'app-recent',
    standalone: true,
    imports: [RouterLink, ImageURLPipe, CommonModule, NgClass],
    templateUrl: './recent.component.html',
    styles: ``
  })
export class RecentComponent implements OnInit {
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
    async ngOnInit() {
      //this.novedades = await this.servicio.getNovedades();
    }
 }
