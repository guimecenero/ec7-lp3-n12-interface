import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { Draw } from 'src/app/models/draw.model';
import { ArtistService } from 'src/app/services/http/artist.service';
import { DrawService } from 'src/app/services/http/draw.service';

@Component({
  selector: 'app-draw-register',
  templateUrl: './draw-register.component.html',
  styleUrls: ['./draw-register.component.scss']
})
export class DrawRegisterComponent implements OnInit {

  draw: Draw = new Draw()
  artists: Artist[] = []

  drawRegisterForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private drawService: DrawService,
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.drawRegisterForm = this.formBuilder.group({

      artist: ['', [Validators.required]],
      title: ['', [Validators.required]],
      img: ['', [Validators.required]],
      desc: ['', [Validators.required]]
    })
  }

  async getArtists(): Promise<void> {

    try {
      
      this.artists = await this.artistService.getArtists()

    } catch (error) {
      
      this.router.navigate(['home'])
    }
  }

  async registerDraw(): Promise<void> {

    try {
      
      await this.drawService.registerDraw(this.draw)

    } catch (error) {
      
    }
  }
}
