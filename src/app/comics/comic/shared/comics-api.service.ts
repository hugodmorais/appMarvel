import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsApiService {
  PUBLIC_KEY = 'f6ce552076706f4eb2ad72f697d5c542'
  HASH = '7cce6f2b80ff430917b814a3d4ea4506';
  URL_API = `https://gateway.marvel.com:443/v1/public/comics?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllComics(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}
