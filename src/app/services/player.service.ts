import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Player } from "../model/player.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl = "http://localhost:3000/player";
  
  constructor( private http: HttpClient) { }

  create(player: Player): Observable<Player>{
    return this.http.post<Player>(this.baseUrl, player)
  }

  read(): Observable<Player[]>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    return this.http.get<Player[]>(this.baseUrl, httpOptions)
  }

  readById(id: string): Observable<Player>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Player>(url, httpOptions)
  }

  update(player: Player): Observable<Player> {
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${player.id}`
    return this.http.put<Player>(url, player, httpOptions)
  }

  delete(id: string): Observable<Player> {
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Player>(url, httpOptions)
  }

  login(req:any){
    return this.http.post<any>("http://localhost:3000/auth/login", req)
    
  }
}
