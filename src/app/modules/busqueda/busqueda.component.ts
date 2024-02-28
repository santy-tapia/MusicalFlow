import { Component, ElementRef, ViewChild } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';
import { ArtistaBusqueda, Artists } from '../../interfaces/busqueda-artistas.interface';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [RouterLink, ImageURLPipe, DecimalPipe],
  templateUrl: './busqueda.component.html',
  styles: ``
})
export class BusquedaComponent {
 @ViewChild("artista")
  public textoRef!:ElementRef<HTMLInputElement>;

  public artistas!:Artists;

  public offset:number=0;
  constructor(private service:SpotifyService, private router:Router) {

  }


  async buscar(texto:HTMLInputElement){
    this.artistas = await this.service.buscarArtista(this.textoRef.nativeElement.value, 0);
  }

  async verMas(){
    this.offset += 20;
    let limit = 20;
    if (this.offset + limit > this.artistas!.total){
      limit = this.artistas!.total - this.offset;
    }

    this.artistas = (await this.service.buscarArtista(this.textoRef.nativeElement.value,this.offset, limit));
    console.log(this.artistas.items);
  }


}
