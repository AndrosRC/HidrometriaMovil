import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = "http://192.168.120.170:5000";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUsers`);
  }

  public getUser(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUser/${id}`);
  }

  public postUser(user: { usuario: string; pass: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/postUser`, user);
  }

  public postRegistro(user: { usuario: string; name: string; pass: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, user);
  }

  public getPropietarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getPropietarios`);
  }

  public loginUser(user: { usuario: string; pass: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
