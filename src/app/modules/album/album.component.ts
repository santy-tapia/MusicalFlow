import { Component, OnInit } from '@angular/core';
import { Album, Track, TrackResult } from '../../interfaces/busqueda-artistas.interface';
import { SpotifyService } from '../../servicio/spotify.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../servicio/theme.service';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-album',
  standalone: true,
  imports: [ImageURLPipe, RouterLink, ButtonModule, CommonModule, NgClass],
  templateUrl: './album.component.html',
  styles:''
})
export class AlbumComponent implements OnInit{

  public index: number
  public album?:Album
  public albumTracks?: any
  constructor(servicio:SpotifyService, ruta:ActivatedRoute, public themeService:ThemeService){
       ruta.params.subscribe(
    (datos:any) => {
      servicio.getAlbum(datos['id']).then(albm => this.album = albm);

       servicio.getAlbumTracks(datos['id'])
        .then( (topTracks:any) => {
          this.albumTracks = topTracks;
          console.log(this.albumTracks)
        })

    },
   )
      this.index = 0
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  theme() {
    return this.themeService.darkMode ? 'dark' : 'light';
  }

  changeIndex(num:number){
    this.index = num-1
  }
  getMinute(ms:number){
    let minute = new Date(ms)
    return minute
  }

}
