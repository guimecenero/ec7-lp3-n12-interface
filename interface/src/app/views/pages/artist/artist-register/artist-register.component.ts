import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-artist-register',
  templateUrl: './artist-register.component.html',
  styleUrls: ['./artist-register.component.scss']
})
export class ArtistRegisterComponent implements OnInit {

  artist: Artist = new Artist()

  artistRegisterForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.artistRegisterForm = this.formBuilder.group({

      name: ['', [Validators.required]],
      uf: ['', [Validators.required]]
    })
  }

  registerArtist(): void {

    console.log(this.artist)
  }
}
