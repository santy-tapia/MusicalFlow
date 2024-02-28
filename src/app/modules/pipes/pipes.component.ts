import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, UpperCasePipe, LowerCasePipe, PercentPipe, SlicePipe, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, UpperCasePipe, LowerCasePipe, PercentPipe, SlicePipe, AsyncPipe],
  templateUrl: './pipes.component.html',
  styles: ``
})
export class PipesComponent {
  public cantidad = 12345.678;
  public hoy = new Date();
  public user = { nombre:'Juan', edad:23};
  public nombre = "Luis María";
  public porc = 0.16757;
  public numeros = [1,2,3,4];
  public novedades:Promise<any>|null;

  constructor(private servicio:SpotifyService){
    this.novedades = this.servicio.getNovedades();
    console.log(this)
  }
}
