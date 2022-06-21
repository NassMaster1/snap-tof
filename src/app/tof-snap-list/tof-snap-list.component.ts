import { Component, OnInit } from '@angular/core';
import { tofsnap } from '../models/tof-snap.model';

@Component({
  selector: 'app-tof-snap-list',
  templateUrl: './tof-snap-list.component.html',
  styleUrls: ['./tof-snap-list.component.scss']
})
export class TofSnapListComponent implements OnInit {

  facesnapsTab!:tofsnap[];

  ngOnInit(): void {

  

    this.facesnapsTab=[ new tofsnap
      ('Peaky Blinders', 'Peaky Blinders', new Date(), 100,
      'https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/series/peaky-blinders-saison-6-le-tournage-se-devoile-en-photos/94692025-1-fre-FR/Peaky-Blinders-saison-6-le-tournage-se-devoile-en-photos.jpg','Londres'),
      new tofsnap
      ('Tommy Shelby', 'Tommy Shelby', new Date(), 3,
      'https://images4.alphacoders.com/808/thumb-1920-808445.jpg'), new tofsnap
      ('Peaky Blinders Femmes', 'Peaky Blinders Femme', new Date(), 3,
      'https://dailymars-cdn-fra1.fra1.digitaloceanspaces.com/wp-content/uploads/2016/09/03.jpg')];
  }

}
