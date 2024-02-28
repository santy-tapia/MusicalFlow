
import { Component, OnInit, HostListener  } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Artist } from '../../interfaces/new-release.interface';
import { SpotifyService } from '../../servicio/spotify.service';
import { ArtistaBusqueda, Image, Track, TrackResult } from '../../interfaces/busqueda-artistas.interface';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { CommonModule, NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-artista',
  standalone: true,
  imports: [RouterLink, ImageURLPipe, ImageURLPipe, NgClass, CommonModule, DatePipe],
  templateUrl: './artista.component.html',
  styles: ``
})
export class ArtistaComponent implements OnInit {
  public artista?: ArtistaBusqueda

  public windowResized: { width: number, height: number };
  public canciones!:Track[];
  constructor(ruta:ActivatedRoute, servicio:SpotifyService){
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
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
