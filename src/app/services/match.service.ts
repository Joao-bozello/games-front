import { Match } from './../model/match.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  baseUrl = "http://localhost:3000/match";

  constructor( private http: HttpClient) { }

  create(match: Match): Observable<Match>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    return this.http.post<Match>(this.baseUrl, match, httpOptions)
  }

  read(): Observable<Match[]>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    return this.http.get<Match[]>(this.baseUrl, httpOptions)
  }
  matchWinner(id:number): Observable<any[]>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    return this.http.get<Match[]>(`${this.baseUrl}/winner/${id}`, httpOptions)
  }

  readById(id: string): Observable<Match>{
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Match>(url, httpOptions)
  }

  update(match: Match): Observable<Match> {
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${match.id}`
    return this.http.put<Match>(url, match, httpOptions)
  }

  delete(id: string): Observable<Match> {
    let token =localStorage.getItem("token")
    if (token ==null )token = ""
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + JSON.parse(token)
      })
    };
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Match>(url, httpOptions)
  }
}
