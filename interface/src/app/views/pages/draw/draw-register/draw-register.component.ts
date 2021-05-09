import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { Draw } from 'src/app/models/draw.model';
import { ArtistService } from 'src/app/services/http/artist.service';
import { DrawService } from 'src/app/services/http/draw.service';

@Component({
  selector: 'app-draw-register',
  templateUrl: './draw-register.component.html',
  styleUrls: ['./draw-register.component.scss'],
})
export class DrawRegisterComponent implements OnInit {
  draw: Draw = new Draw();
  artists: Artist[] = [];

  imgToDisplay: any;

  drawRegisterForm = new FormGroup({
    artist: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
  });

  constructor(
    private drawService: DrawService,
    private artistService: ArtistService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.getArtists();
  }

  async getArtists(): Promise<void> {
    try {
      this.artists = await this.artistService.getArtists();
    } catch (error) {
      this.router.navigate(['home']);
    }
  }

  async registerDraw(): Promise<void> {
    try {
      await this.drawService.registerDraw(this.draw);
    } catch (error) {}
  }

  async onFileSelected() {
    const inputNode: any = document.getElementById('img');
    this.draw.img = inputNode.files[0];
    this.imgToDisplay = await this.ImgToBase64(inputNode.files[0]);
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
