
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Token } from '../interfaces/token.interface';
//import { Novedades, Resultado } from '../interfaces/new-releases.interface';
import { ResultadoBusqueda, ArtistaBusqueda, Artists, Track, TrackResult, Album, Type } from '../interfaces/busqueda-artistas.interface';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private CLIENT_ID: string = "85b5910403a14bf9b75bf6f61cae1427";
  private CLIENT_SECRET: string = "59efdd98f3084fc8a7707b68d7a8650d";
  private SPOTIFY_URL: string = "https://api.spotify.com/v1/";
  constructor(private http: HttpClient) { }

    async getTokenNovedades() {
    const tokStr: string | null = localStorage.getItem("token");
    const ahora = new Date();
    let token: any;
    if (tokStr) {
      const tok = JSON.parse(tokStr);
      if (ahora < new Date(tok.fecha)) {
        return tok.token;
      }
    }
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ":" + this.CLIENT_SECRET),
    };
    token = await firstValueFrom(this.http.post<any>(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      { headers }
    ));
    localStorage.setItem("token", JSON.stringify({ "token": token.access_token, "fecha": (ahora.getTime() + token.expires_in * 1000) }));
    return token;
  }

  async getTokenBusqueda(): Promise<Token> {
    const strToken = sessionStorage.getItem("token");
    let obtenerToken = false;
    if (strToken) {
      const token: Token = JSON.parse(strToken);
      let fechaMs = sessionStorage.getItem("fecha");
      if (fechaMs) {
        const expiracion = new Date(parseInt(fechaMs) + token.expires_in);
        const ahora = new Date();
        if (expiracion < ahora) {
          obtenerToken = true;
        }
      }
    } else {
      obtenerToken = true;
    }
    if (obtenerToken) {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ":" + this.CLIENT_SECRET),
      };
      const token = await firstValueFrom(this.http.post<Token>(
        'https://accounts.spotify.com/api/token', // URL
        'grant_type=client_credentials', // Body
        { headers } // options {headers, params...}
      ));
      sessionStorage.setItem("token", JSON.stringify(token));
      sessionStorage.setItem("fecha", JSON.stringify(new Date().getTime()));
      return token;
    }
    return JSON.parse(strToken!);
  }

  async getOptions(params: any) {
    let token = await this.getTokenBusqueda();
    return {
      params,
      headers: { Authorization: `Bearer ${token.access_token}` },
    };
  }

  async getNovedades(): Promise<any> {
    const opt = await this.getOption();
    console.log("opt", opt);
    let albumes = await firstValueFrom(this.http
      .get('https://api.spotify.com/v1/browse/new-releases', opt));
    return albumes;
  }


  async buscarArtista(artista: string, offset: number = 0, limit: number = 20): Promise<Artists> {
    let resultado = await firstValueFrom(this.http.get<ResultadoBusqueda>(
      'https://api.spotify.com/v1/search',
      await this.getOptions({ 'q': artista, 'type': 'artist', offset, limit })
    ));

    return resultado.artists;
  }

  async buscarArtistaForm(artista: string,type:string, market:string, limit: number,  offset: number): Promise<Artists> {
    let resultado = await firstValueFrom(this.http.get<ResultadoBusqueda>(
      'https://api.spotify.com/v1/search',
      await this.getOptions({ 'q': artista, 'type': type, offset, limit })
    ));

    return resultado.artists;
  }

  async getArtista(id: string):Promise<ArtistaBusqueda> {
    let artista:ArtistaBusqueda = await firstValueFrom(this.http.get<ArtistaBusqueda>(
      'https://api.spotify.com/v1/artists/' + id,
      await this.getOptions({})
    ));
    console.log(JSON.stringify(artista));
    return artista;
  }
   async getOption() {
    let token = await this.getTokenNovedades();
    console.log("token", token);
    return {
      params: { country: 'ES' },
      headers: { Authorization: `Bearer ${token}` },
    };
  }
  async getTopTracks(id: string):Promise<Track[]> {
    let topTracks:TrackResult = await firstValueFrom(this.http.get<TrackResult>(
      'https://api.spotify.com/v1/artists/' + id +'/top-tracks',
      await this.getOptions({'country':'ES'})
    ));
    console.log(JSON.stringify(topTracks.tracks));
    return topTracks.tracks;
  }

   async getAlbum(id: string):Promise<Album> {
    let album:Album = await firstValueFrom(this.http.get<Album>(
      'https://api.spotify.com/v1/albums/' + id ,
      await this.getOptions({'country':'ES'})
    ));
    return album;
  }
 async getAlbumTracks(id: string):Promise<any[]> {
    let tracks:any = await firstValueFrom(this.http.get<Track[]>(
      'https://api.spotify.com/v1/albums/' + id +'/tracks',
      await this.getOptions({'country':'ES'})
    ));
    console.log(tracks)
    return tracks.items;
  }

}

