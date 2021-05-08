import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Draw } from 'src/app/models/draw.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  url: string = environment.api + '/draw'

  constructor(
    private http: HttpClient
  ) { }

  getDraws(): Promise<Draw[]> {

    return this.http.get<Draw[]>(this.url).toPromise()
  }
  
  registerDraw(draw: Draw): Promise<any> {

    return this.http.post(this.url, { draw }).toPromise()
  }

  editDraw(draw: Draw): Promise<any> {

    return this.http.put(this.url, { draw }).toPromise()
  }

  deleteDraw(drawId: number): Promise<any> {

    return this.http.delete(this.url + '/' + drawId).toPromise()
  }
}
