import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/http/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = []

  constructor(
    private artistService: ArtistService,
    private router: Router  
  ) { }

  ngOnInit(): void {

    this.getArtists()
  }

  async getArtists(): Promise<void> {

    try {
      
      this.artists = await this.artistService.getArtists()

    } catch (error) {
      
      this.router.navigate(['home'])
    }
  }

  async editArtist(artist: Artist): Promise<void> {

    try {
      
      await this.artistService.editArtist(artist)

    } catch (error) {
      
    }
  }

  async deleteArtist(artistId: number): Promise<void> {

    try {
      
      await this.artistService.deleteArtist(artistId)

    } catch (error) {
      
    }
  }
}
