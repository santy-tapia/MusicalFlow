import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ThemeService } from '../../services/theme.service';
import { GeniusService } from '../../services/genius.service';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.css'
})
export class CancionComponent {
  public cancion?: any;
  public liricas?: any;
  constructor(private servicio:SpotifyService, private ruta:ActivatedRoute, public themeService:ThemeService, private lyrics:GeniusService) {
    ruta.params.subscribe(
      (datos:any) => {
        servicio.getCancion(datos['id']).then(song => this.cancion = song);

      },
    )
    ruta.params.subscribe(
      (datos:any) => {
        lyrics.getLyrics(this.cancion.name, this.cancion.artist.name).then(lyr => this.liricas = lyr);
        console.log(this.liricas);
      }
    )
  }
}
