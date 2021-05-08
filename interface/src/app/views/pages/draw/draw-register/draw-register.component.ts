import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Draw } from 'src/app/models/draw.model';

@Component({
  selector: 'app-draw-register',
  templateUrl: './draw-register.component.html',
  styleUrls: ['./draw-register.component.scss']
})
export class DrawRegisterComponent implements OnInit {

  draw: Draw = new Draw()
  drawRegisterForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.drawRegisterForm = this.formBuilder.group({

      artist: ['', [Validators.required]],
      title: ['', [Validators.required]],
      img: ['', [Validators.required]],
      desc: ['', [Validators.required]]
    })
  }

  registerDraw(): void {

    console.log(this.draw)
  }

}
