import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iDrawItem } from 'src/app/interfaces/lists/draw-item.interface';
import { Artist } from 'src/app/models/artist.model';
import { Draw } from 'src/app/models/draw.model';
import { ArtistService } from 'src/app/services/http/artist.service';
import { DrawService } from 'src/app/services/http/draw.service';

@Component({
  selector: 'app-draw-list',
  templateUrl: './draw-list.component.html',
  styleUrls: ['./draw-list.component.scss'],
})
export class DrawListComponent implements OnInit {
  draws: iDrawItem[] = [];

  artists: Artist[] = [];

  constructor(
    private drawService: DrawService,
    private artistService: ArtistService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.setDrawList();
    } catch (error) {
      this.router.navigate(['home']);
    }
  }

  async setDrawList(): Promise<void> {
    try {
      let draws: Draw[] = await this.drawService.getDraws();
      let artists: Artist[] = await this.artistService.getArtists();

      let artist: Artist | undefined = new Artist();

      draws.forEach((draw) => {
        artist = artists.find((artist) => artist.id === draw.artistId);

        if (artist) {
          this.draws.push({
            id: draw.id,
            img: draw.img,
            title: draw.title,
            artist: artist.name,
          });
        }

        artist = new Artist();
      });

      this.cdr.markForCheck();
    } catch (error) {}
  }

  async getArtists(): Promise<void> {
    try {
      this.artists = await this.artistService.getArtists();
    } catch (error) {}
  }

  async editDraw(draw: Draw): Promise<void> {
    try {
      await this.drawService.editDraw(draw);
    } catch (error) {}
  }

  async deleteDraw(drawId: number): Promise<void> {
    try {
      await this.drawService.deleteDraw(drawId);
    } catch (error) {}
  }
}
