import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';
import { Novedades, Resultado } from '../../interfaces/new-release.interface';
import { RouterLink } from '@angular/router';
import { ImageURLPipe } from '../../pipes/image-url.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ImageURLPipe],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit{

  public albums?:Novedades;

  constructor(private servicio:SpotifyService){
    console.log(servicio.getNovedades());
      this.servicio.getNovedades()
      .then( (datos:Novedades) => {
        this.albums = datos;
        console.log(this.albums)
      })


  }

  async ngOnInit() {
    //this.novedades = await this.servicio.getNovedades();
  }
}