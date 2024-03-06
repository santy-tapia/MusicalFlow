import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeniusService {
    private CLIENT_ID: string = "Ot2hF2ysz9V95nXzyOALIusbTAVeHc-ivkReD48JvSQwg_IUtifwgeMp3KRUahyr";
  constructor(private http:HttpClient) { }

}
