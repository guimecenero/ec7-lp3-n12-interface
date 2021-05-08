import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/http/artist.service';

@Component({
  selector: 'app-artist-register',
  templateUrl: './artist-register.component.html',
  styleUrls: ['./artist-register.component.scss']
})
export class ArtistRegisterComponent implements OnInit {

  artist: Artist = new Artist()

  artistRegisterForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private artistService: ArtistService
  ) { }

  ngOnInit(): void {

    this.artistRegisterForm = this.formBuilder.group({

      name: ['', [Validators.required]],
      uf: ['', [Validators.required]]
    })
  }

  async registerArtist(): Promise<void> {

    try {
      
      await this.artistService.registerArtist(this.artist)
      console.log(this.artist)

    } catch (error) {
      
    }
  }
}
