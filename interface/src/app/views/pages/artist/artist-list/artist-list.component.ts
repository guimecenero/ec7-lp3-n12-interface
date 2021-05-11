import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/http/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];

  artist: Artist;

  constructor(
    private artistService: ArtistService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal
  ) {}

  async ngOnInit() {
    await this.getArtists();
  }

  async getArtists(): Promise<void> {
    try {
      this.artists = await this.artistService.getArtists();
      console.log('a');
      console.log(this.artists);
    } catch (error) {
      this.router.navigate(['home']);
    }
  }

  async editArtist(artist: Artist): Promise<void> {
    try {
      await this.artistService.editArtist(artist);
    } catch (error) {}
  }

  async deleteArtist(artistId: number): Promise<void> {
    await this.artistService.deleteArtist(artistId);
    await this.getArtists();
    this.cdr.markForCheck();
  }

  async openModal(artist: Artist, content: TemplateRef<any>) {
    try {
      this.artist = { ...artist };
      this.modalService.open(content).result.then(async (result) => {
        await this.editArtist(this.artist);
        await this.getArtists();
        this.cdr.markForCheck();
      });
    } catch {}
  }
}
