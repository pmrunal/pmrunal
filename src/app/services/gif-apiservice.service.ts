import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifAPIServiceService {

  constructor(private http: HttpClient) { }
  APIURL = "https://api.giphy.com/v1/gifs/search";

  getGIFs(searchTerm:string): Observable<any> {
    let httpParams = new HttpParams()
      .set("api_key", "sTt0zfK6rBzOpcDHahyFnShNhvqP8PKN")
      .set("q", searchTerm)
      .set("limit", "20")
      let headers = new HttpHeaders({
        'Accept': 'application/json',     
        'Content-Type': 'application/json'
      });
    console.log(httpParams.toString());
    return this.http.get<any>(this.APIURL, {
      params: httpParams,
      headers: headers,
      responseType: 'json'
    });
  }



  private path(path: string): string {
    return `${this.APIURL}${path}`;
  }
}

