import { Component, OnInit,Input } from '@angular/core';
import { tofsnap } from '../models/tof-snap.model';
import {TofSnapsService} from "../services/tof-snaps.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-tof-snap',
  templateUrl: './tof-snap.component.html',
  styleUrls: ['./tof-snap.component.scss']
})
export class TofSnapComponent implements OnInit {

  @Input() tofsnap!:tofsnap;
  buttonLikes!:string;

  constructor(private tofSnapsService:TofSnapsService,private router:Router) { }


ngOnInit(): void {

  this.buttonLikes = 'Like';

}

onAddLike() {
  if (this.buttonLikes === 'Like') {
    this.tofSnapsService.snaptofsnapbyID(this.tofsnap.id,'Like');
    this.buttonLikes = 'UnLike';

  } else {
    this.tofSnapsService.snaptofsnapbyID(this.tofsnap.id,'UnLike');
    this.buttonLikes = 'Like';
  }
 }

  OnView() {
    this.router.navigateByUrl('tofsnps/'+this.tofsnap.id);
  }
}


