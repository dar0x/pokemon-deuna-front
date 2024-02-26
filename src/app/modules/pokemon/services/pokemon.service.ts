import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly URL: string = environment.api;
  private readonly service: string = "pokemon";

  constructor(private http: HttpClient) {}

  getList(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.URL}/${this.service}?limit=${limit}&offset=${offset}`)
      .pipe(
        map((dataRaw: any) => dataRaw)
      );
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(`${this.URL}/${this.service}/${id}`)
      .pipe(
        map((dataRaw: any) => dataRaw)
      );
  }
}
