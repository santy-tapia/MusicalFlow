import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeniusService {
    private CLIENT_ID: string = "rvPQamV8jj5Df8jR-npEj_y67-JB73xApg4UX2CvBUt7pjcxpJzMLFdRh_1_Fc--";
    private base_url: string = "https://api.genius.com";
  constructor(private http:HttpClient) { }

  getLyrics(title:string, artist : string): Promise<any>{
    let url = `${this.base_url}/search?q=${title} ${artist}&access_token=${this.CLIENT_ID}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.CLIENT_ID,
    });
    return new Promise((resolve, reject) => {
      this.http.get(url, { headers }).subscribe(
        (data: any) => {
          const songId = data.response.hits[0].result.id;
          const lyricsUrl = `${this.base_url}/songs/${songId}`;
          this.http.get(lyricsUrl, { headers }).subscribe(
            (data: any) => {
              resolve(data.response.song.lyrics.plain);
            },
            error => {
              reject(error);
            }
          );
        },
        error => {
          reject(error);
        }
      );
    })
  }

}
