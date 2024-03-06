import { ThemeService } from '../../services/theme.service';
import { Component, OnInit, HostListener  } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Artist } from '../../interfaces/new-release.interface';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistaBusqueda, Image, Track, TrackResult } from '../../interfaces/busqueda-artistas.interface';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { CommonModule, NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Button } from 'primeng/button';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-artista',
  standalone: true,
  imports: [RouterLink, ImageURLPipe, ImageURLPipe, NgClass, CommonModule, DatePipe, ButtonModule],
  templateUrl: './artista.component.html',
  styles: ``
})
export class ArtistaComponent implements OnInit {
  /*public index: number
  public album?:Album
  public albumTracks?: any*/
  public index: number
  public artista?: ArtistaBusqueda
  public windowResized: { width: number, height: number };
  public canciones?:any;
  constructor(ruta:ActivatedRoute, servicio:SpotifyService, public themeService:ThemeService){
   ruta.params.subscribe(
    (datos:any) => {
      servicio.getArtista(datos['id']).then(art => this.artista = art);
       servicio.getTopTracks(datos['id'])
        .then( (topTracks:any) => {
          this.canciones = topTracks;
          console.log(this.canciones)
        })

    },
   )
  this.windowResized = { width: window.innerWidth, height: window.innerHeight };
   this.index = 0
  }
 get theme() {
    return this.themeService.darkMode ? 'dark' : 'light';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changeIndex(num:number){
    this.index = num-1
  }
  getMinute(ms:number){
    let minute = new Date(ms)
    return minute
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.windowResized.width = window.innerWidth;
    this.windowResized.height = window.innerHeight;
  }
}
