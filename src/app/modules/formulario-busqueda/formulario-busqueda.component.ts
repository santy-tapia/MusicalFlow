
import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Type, Artists, ArtistaBusqueda } from '../../interfaces/busqueda-artistas.interface';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from '../../servicio/spotify.service';
import { Router, RouterLink } from '@angular/router';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
@Component({
  selector: 'app-formulario-busqueda',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, RouterLink, ImageURLPipe],
  templateUrl: './formulario-busqueda.component.html',
  styles: ''
})
export class FormularioBusquedaComponent  {
  /*
  public q:string = ""

  public market = new Map<string,string>([
    ["ES", "España"],
    ["US", "Estados Unidos"],
    ["GB", "Gran Bretaña"]
  ])
  public limit:number = 5
  public offset:number=0;

  public artistas!:Artists

  constructor(private servicio:SpotifyService,  private router:Router){

  }

   async buscar(q:string, market:string, limit:number, offset:number){
    this.artistas = await this.servicio.buscarArtistaForm(q,this.type,market, limit, offset);
  }
  */

  frmBusqueda:FormGroup;

  public artistas!:Artists

  public type:string = "artist"

  public market = new Map<string,string>([
    ["ES", "España"],
    ["US", "Estados Unidos"],
    ["GB", "Gran Bretaña"]
  ])

  constructor(private servicio:SpotifyService,  private router:Router){
    this.frmBusqueda = new FormGroup({
      'q' : new FormControl('', [Validators.required]),
      'market' : new FormControl(this.market),
      'limit' : new FormControl(5),
      'offset' : new FormControl(0)
    });
  }

  async buscar(){
    this.artistas = await this.servicio.buscarArtistaForm(this.frmBusqueda.value['q'], this.type, this.frmBusqueda.value['market'], this.frmBusqueda.value['limit'], this.frmBusqueda.value['offset']);
  }
}
