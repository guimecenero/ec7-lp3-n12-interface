import { Component, OnInit } from '@angular/core';
import { iDrawItem } from 'src/app/interfaces/lists/draw-item.interface';

@Component({
  selector: 'app-draw-list',
  templateUrl: './draw-list.component.html',
  styleUrls: ['./draw-list.component.scss']
})
export class DrawListComponent implements OnInit {

  draws: iDrawItem[] = [
    {
      img: 'UMA IMAGEM',
      title: 'UM TÍTULO',
      artist: 'MEU PAU'
    },
    {
      img: 'UMA IMAGEM',
      title: 'UM TÍTULO',
      artist: 'MEU PAU'
    },
    {
      img: 'UMA IMAGEM',
      title: 'UM TÍTULO',
      artist: 'MEU PAU'
    },
    {
      img: 'UMA IMAGEM',
      title: 'UM TÍTULO',
      artist: 'MEU PAU'
    },
    {
      img: 'UMA IMAGEM',
      title: 'UM TÍTULO',
      artist: 'MEU PAU'
    },
    {
      img: 'UMA IMAGEM',
      title: 'UM TÍTULO',
      artist: 'MEU PAU'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
