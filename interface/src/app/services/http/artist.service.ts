import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  url: string = environment.api + '/artist';

  constructor(private http: HttpClient) {}

  getArtists(): Promise<Artist[]> {
    return this.http.get<Artist[]>(this.url).toPromise();
  }

  registerArtist(artist: Artist): Promise<any> {
    return this.http
      .post(this.url, { name: artist.name, uf: artist.uf })
      .toPromise();
  }

  editArtist(artist: Artist): Promise<any> {
    return this.http
      .put(this.url, { id: artist.id, name: artist.name, uf: artist.uf })
      .toPromise();
  }

  deleteArtist(artistId: number): Promise<any> {
    return this.http.delete(this.url + '?id=' + artistId).toPromise();
  }
}
