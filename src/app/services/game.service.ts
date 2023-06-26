import { Game } from './../model/game.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl = "http://localhost:3000/game";

  constructor( private http: HttpClient) { }

  create(game: Game): Observable<Game>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    return this.http.post<Game>(this.baseUrl, game, httpOptions)
  }

  read(): Observable<Game[]>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    return this.http.get<Game[]>(this.baseUrl, httpOptions)
  }

  readById(id: string): Observable<Game>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Game>(url, httpOptions)
  }

  update(game: Game): Observable<Game> {
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${game.id}`
    return this.http.put<Game>(url, game, httpOptions)
  }

  delete(id: string): Observable<Game> {
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Game>(url, httpOptions)
  }
}
