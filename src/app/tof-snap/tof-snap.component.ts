import { Component, OnInit,Input } from '@angular/core';
import { tofsnap } from '../models/tof-snap.model';

@Component({
  selector: 'app-tof-snap',
  templateUrl: './tof-snap.component.html',
  styleUrls: ['./tof-snap.component.scss']
})
export class TofSnapComponent implements OnInit {

  @Input() tofsnap!:tofsnap;; 

buttonLikes!:string;

ngOnInit(): void {
 
  this.buttonLikes = 'Like';

}

onAddLike() { 
  if (this.buttonLikes === 'Like') {
    this.tofsnap.snaps!++;
    this.buttonLikes = 'UnLike';
    
  } else {
    this.tofsnap.snaps--;
    this.buttonLikes = 'Like';
  }
 }

}


