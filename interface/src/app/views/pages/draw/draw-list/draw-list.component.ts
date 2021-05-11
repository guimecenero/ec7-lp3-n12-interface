import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  draw: Draw;

  constructor(
    private drawService: DrawService,
    private artistService: ArtistService,
    private modalService: NgbModal,
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
      if (this.draws) {
        this.draws = [];
      }
      draws.forEach((draw) => {
        artist = artists.find((artist) => artist.id === draw.artistId);

        if (artist) {
          this.draws.push({
            id: draw.id,
            img: draw.img,
            title: draw.title,
            artist: artist.name,
            desc: draw.desc,
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
    await this.drawService.deleteDraw(drawId);
    await this.setDrawList();
    this.cdr.markForCheck();
  }

  async openModal(draw: iDrawItem, content: TemplateRef<any>) {
    try {
      this.draw = {
        id: draw.id,
        artistId: +draw.artist,
        desc: draw.desc,
        img: draw.img,
        title: draw.title,
      };

      this.modalService.open(content).result.then(async (result) => {
        await this.editDraw(this.draw);
        await this.setDrawList();
        this.cdr.markForCheck();
      });
    } catch {}
  }
}
