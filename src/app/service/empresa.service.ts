import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresa } from '../domain/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string = "https://apitest-bt.herokuapp.com/api/v1/empresas";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders().append("user", "User123").append("password", "Password123");
    return this.http.get(this.url, { headers: headers });
  }

  put(empresa: Empresa): Observable<any> {

    const headers = new HttpHeaders().append("user", "User123").append("password", "Password123");
    return this.http.put(this.url + "/" + empresa.id, { "empresa": empresa }, { headers: headers });
  }

  post(empresa: Empresa): Observable<any> {
    console.log({ "empresa": empresa });
    const headers = new HttpHeaders().append("user", "User123").append("password", "Password123");
    return this.http.post(this.url+"/", { "empresa": empresa }, { headers: headers });
  }
  delete(id: number): Observable<any> {
    const headers = new HttpHeaders().append("user", "User123").append("password", "Password123");
    return this.http.delete(this.url + "/" + id, { headers: headers });
  }
}
