import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Draw } from 'src/app/models/draw.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DrawService {
  url: string = environment.api + '/draw';

  constructor(private http: HttpClient) {}

  getDraws(): Promise<Draw[]> {
    return this.http.get<Draw[]>(this.url).toPromise();
  }

  async registerDraw(draw: Draw): Promise<any> {
    console.log(draw);
    return this.http
      .post(this.url, {
        artistId: draw.artistId,
        title: draw.title,
        desc: draw.desc,
        img: await this.ImgToBase64(draw.img),
      })
      .toPromise();
  }

  async editDraw(draw: Draw): Promise<any> {
    return this.http
      .put(this.url, {
        id: draw.id,
        artistId: draw.artistId,
        title: draw.title,
        desc: draw.desc,
        img: await this.ImgToBase64(draw.img),
      })
      .toPromise();
  }

  deleteDraw(drawId: number): Promise<any> {
    return this.http.delete(this.url + '?id=' + drawId).toPromise();
  }

  ImgToBase64(img: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
